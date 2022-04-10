import axios from "axios";
import { readdirSync, readFileSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { resolve } from "path";
import prettier from "prettier";
import rimraf from "rimraf";

const figma = async (url: string) => {
	const res = await axios.get(`https://api.figma.com${url}`, {
		headers: {
			"x-figma-token": process.env.FIGMA_TOKEN as string,
		},
	});

	return res;
};

// https://stackoverflow.com/a/53952925/14410020
const toPascalCase = (str: string) => {
	return `${str}`
		.replace(new RegExp(/[-_]+/, "g"), " ")
		.replace(new RegExp(/[^\w\s]/, "g"), "")
		.replace(
			new RegExp(/\s+(.)(\w*)/, "g"),
			($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
		)
		.replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

const format = (str: string, plugins?: string[]) => {
	const prettierRc = JSON.parse(
		readFileSync(resolve(process.cwd(), ".prettierrc"), "utf-8")
	);

	return prettier.format(str, {
		parser: "babel",
		plugins,
		...prettierRc,
	});
};

const reactSvg = (Name: string, svg: string) => {
	svg = svg
		.replace(/fill-rule="/g, `fillRule="`)
		.replace(/clip-rule="/g, `clipRule="`)
		.replace(/clip-path="/g, `clipPath="`);

	return format(
		`
		// organize-imports-ignore
		import React from "react";

		export const ${Name} = (props: React.SVGProps<SVGSVGElement>) => {
			return (
				${svg.replace(/xmlns\=\"http:\/\/www.w3.org\/2000\/svg\"/, (m) => {
					return `${m}\n{...props}`;
				})}
			)
		}
	`
	);
};

const chunk = (arr: any[], chunkSize: number) => {
	return (Array(Math.ceil(arr.length / chunkSize)) as any)
		.fill()
		.map((_: any, i: number) => {
			return arr.slice(i * chunkSize, i * chunkSize + chunkSize);
		});
};

const main = async () => {
	if (!("FIGMA_TOKEN" in process.env)) {
		throw new Error("Environment variable FIGMA_TOKEN must be set!");
	}

	if (!("FIGMA_FILE_KEY" in process.env)) {
		throw new Error("Environment variable FIGMA_FILE_KEY must be set!");
	}

	const fileKey = process.env.FIGMA_FILE_KEY?.split(",")[0] as string;
	const nodeId = process.env.FIGMA_FILE_KEY?.split(",")[1] as string;

	const { data: fileData } = await figma(
		`/v1/files/${fileKey}/nodes?ids=${nodeId}`
	);
	const node = fileData.nodes[nodeId] as any;

	const { data: svgData } = await figma(
		`/v1/images/${fileKey}?ids=${Object.keys(node.components).join(
			","
		)}&format=svg&svg_simplify_stroke=true`
	);

	if (!svgData.images) throw new Error("Failed to get svg data.");

	await new Promise((r) =>
		rimraf(resolve(process.cwd(), "packages", "icons", "src"), () =>
			r(true)
		)
	);
	await new Promise((r) =>
		rimraf(resolve(process.cwd(), "packages", "icons-react", "src"), () =>
			r(true)
		)
	);

	await mkdir(resolve(process.cwd(), "packages", "icons", "src"));
	await mkdir(resolve(process.cwd(), "packages", "icons-react", "src"));

	let svgIndexHeader: any[] = [];
	let reactIndexHeader: any[] = [];

	let reactDeclaration: any[] = [];

	let svgIndexFooter = ["export default {"];
	let reactIndexFooter = ["export default {"];

	const icons = [];

	for (const [id, svgUrl] of Object.entries(svgData.images)) {
		const n = node.components[id];

		icons.push({
			id,
			name: n.name,
			svgUrl: svgUrl,
		});
	}

	if (Array.from(new Set(icons)).length !== icons.length) {
		throw new Error(
			"Duplicate values found! Check Figma file for any components with the same names!"
		);
	}

	for await (const component of icons) {
		let { id, name, svgUrl } = component;

		const d = Date.now();

		const { data: svg } = await axios.get(svgUrl as string);

		const data = {
			id,
			name: toPascalCase(name),
			svg,
		};

		if (!data.svg.startsWith("<svg")) throw new Error("Not valid SVG.");

		svgIndexHeader.push(`import ${data.name} from "./${data.name}.svg"`);
		reactIndexHeader.push(`import { ${data.name} } from "./${data.name}"`);
		reactDeclaration.push(
			`export declare function ${data.name}(props: React.SVGProps<SVGSVGElement>): JSX.Element;`
		);

		svgIndexFooter.push(`\t${data.name},`);
		reactIndexFooter.push(`\t${data.name},`);

		await writeFile(
			resolve(
				process.cwd(),
				"packages",
				"icons",
				"src",
				`${data.name}.svg`
			),
			format(data.svg)
		);

		await writeFile(
			resolve(
				process.cwd(),
				"packages",
				"icons-react",
				"src",
				`${data.name}.tsx`
			),
			reactSvg(data.name, data.svg)
		);

		console.log(`Wrote ${data.name}.svg in ${Date.now() - d} ms.`);
	}

	if (
		readdirSync(resolve(process.cwd(), "packages", "icons", "src"))
			.length !== icons.length ||
		readdirSync(resolve(process.cwd(), "packages", "icons-react", "src"))
			.length !== icons.length
	) {
		throw new Error("Error writing some files...");
	}

	svgIndexFooter.push("}");
	reactIndexFooter.push("}");

	await writeFile(
		resolve(process.cwd(), "packages", "icons", "src", "index.ts"),
		format(`${svgIndexHeader.join("\n")}\n\n${svgIndexFooter.join("\n")}`, [
			"prettier-plugin-organize-imports",
		])
	);

	await writeFile(
		resolve(process.cwd(), "packages", "icons-react", "src", "index.ts"),
		format(
			`${reactIndexHeader.join("\n")}\n\n${reactIndexFooter.join("\n")}`,
			["prettier-plugin-organize-imports"]
		)
	);

	await writeFile(
		resolve(process.cwd(), "packages", "icons-react", "src", "index.d.ts"),
		reactDeclaration.join("\n")
	);
};

main();
