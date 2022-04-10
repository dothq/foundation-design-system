import { spawn } from "child_process";
import { existsSync, statSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import prompts from "prompts";

const main = async () => {
	const packagesDir = resolve(process.cwd(), "packages");

	const packages = (await readdir(packagesDir)).filter(
		(f) =>
			statSync(resolve(packagesDir, f)).isDirectory() &&
			existsSync(resolve(packagesDir, f, "package.json"))
	);

	const packageJson = await readFile(
		resolve(process.cwd(), "package.json"),
		"utf-8"
	);
	const { version } = JSON.parse(packageJson);

	let totp = "";

	if (!process.env.IGNORE_TOTP) {
		const res = await prompts({
			type: "text",
			name: "totp",
			message: "Enter NPM one time passcode (if required)",
		});

		totp = res.totp;
	}

	for await (const pkg of packages) {
		const pkgDir = resolve(packagesDir, pkg);

		const pkgPackageJsonRaw = await readFile(
			resolve(pkgDir, "package.json"),
			"utf-8"
		);
		const pkgPackageJson = JSON.parse(pkgPackageJsonRaw);

		pkgPackageJson.version = version;

		await writeFile(
			resolve(pkgDir, "package.json"),
			JSON.stringify(pkgPackageJson, null, 2)
		);

		console.log(`Publishing ${pkg}...`);

		await new Promise((res) => {
			const proc = spawn("yarn", ["run", "build"], {
				stdio: "inherit",
				cwd: pkgDir,
			});

			proc.on("close", (e) => {
				res(true);
			});
		});

		await new Promise((res) => {
			const proc = spawn(
				"yarn",
				[
					"publish",
					"--new-version",
					version,
					"--access",
					"public",
				].concat(totp.length ? ["--otp", totp] : []),
				{
					stdio: "inherit",
					cwd: pkgDir,
				}
			);

			proc.stderr?.on("data", () => process.exit(1));
			proc.stderr?.on("error", () => process.exit(1));
			proc.stdout?.on("error", () => process.exit(1));
			proc.on("error", () => process.exit(1));

			proc.on("close", (e) => {
				if (e == 1) process.exit(1);
				else res(true);
			});
		});
	}
};

main();
