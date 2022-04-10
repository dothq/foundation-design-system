// organize-imports-ignore
import React from "react";

export const Waveform = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7 3C7 2.44772 7.44771 2 8 2C8.55228 2 9 2.44772 9 3V13C9 13.5523 8.55228 14 8 14C7.44771 14 7 13.5523 7 13V3Z"
				fill="black"
			/>
			<path
				d="M13 5C13 4.44772 13.4477 4 14 4C14.5523 4 15 4.44772 15 5V11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11V5Z"
				fill="black"
			/>
			<path
				d="M1 7C1 6.44772 1.44771 6 2 6C2.55229 6 3 6.44772 3 7V9C3 9.55229 2.55229 10 2 10C1.44771 10 1 9.55229 1 9V7Z"
				fill="black"
			/>
			<path
				d="M5 4C4.44771 4 4 4.44772 4 5V11C4 11.5523 4.44771 12 5 12C5.55229 12 6 11.5523 6 11V5C6 4.44772 5.55229 4 5 4Z"
				fill="black"
			/>
			<path
				d="M11 5C10.4477 5 10 5.44772 10 6V10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10V6C12 5.44772 11.5523 5 11 5Z"
				fill="black"
			/>
		</svg>
	);
};
