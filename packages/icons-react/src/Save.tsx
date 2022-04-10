// organize-imports-ignore
import React from "react";

export const Save = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect x="7" width="2" height="10" rx="1" />
			<path
				d="M5 8L8 11L11 8"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5 5C11.5 4.44772 11.9477 4 12.5 4H13C14.6569 4 16 5.34315 16 7V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V7C0 5.34315 1.34315 4 3 4H3.5C4.05229 4 4.5 4.44772 4.5 5C4.5 5.55228 4.05229 6 3.5 6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V7C14 6.44772 13.5523 6 13 6H12.5C11.9477 6 11.5 5.55228 11.5 5Z"
			/>
		</svg>
	);
};
