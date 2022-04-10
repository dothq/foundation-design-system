// organize-imports-ignore
import React from "react";

export const Notepad = (props: React.SVGProps<SVGSVGElement>) => {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 1C5 0.447715 4.55229 0 4 0C3.44771 0 3 0.447715 3 1V2.17071C1.83481 2.58254 1 3.69378 1 5V13C1 14.6569 2.34315 16 4 16H12C13.6569 16 15 14.6569 15 13V5C15 3.69378 14.1652 2.58254 13 2.17071V1C13 0.447715 12.5523 0 12 0C11.4477 0 11 0.447715 11 1V2H9V1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V2H5V1ZM12 4C12.5523 4 13 4.44772 13 5V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V5C3 4.44772 3.44772 4 4 4H12Z"
				fill="black"
			/>
			<path
				d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H5Z"
				fill="black"
			/>
			<path
				d="M5 8C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8H5Z"
				fill="black"
			/>
			<path
				d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H5Z"
				fill="black"
			/>
		</svg>
	);
};
