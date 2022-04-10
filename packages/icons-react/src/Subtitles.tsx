// organize-imports-ignore
import React from "react";

export const Subtitles = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4 7C3.44771 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7H4Z"
				fill="black"
			/>
			<path
				d="M4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12H8C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10H4Z"
				fill="black"
			/>
			<path
				d="M10 11C10 10.4477 10.4477 10 11 10H12C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 4C0 2.34315 1.34315 1 3 1H13C14.6569 1 16 2.34315 16 4V12C16 13.6569 14.6569 15 13 15H3C1.34315 15 0 13.6569 0 12V4ZM3 3H13C13.5523 3 14 3.44772 14 4V12C14 12.5523 13.5523 13 13 13H3C2.44772 13 2 12.5523 2 12V4C2 3.44772 2.44772 3 3 3Z"
				fill="black"
			/>
		</svg>
	);
};
