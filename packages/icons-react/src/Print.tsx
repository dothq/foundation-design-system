// organize-imports-ignore
import React from "react";

export const Print = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M10 2H6C5.44772 2 5 2.44772 5 3V4H11V3C11 2.44772 10.5523 2 10 2ZM3 4C1.34315 4 0 5.34315 0 7V10C0 11.6569 1.34315 13 3 13C3 14.6569 4.34315 16 6 16H10C11.6569 16 13 14.6569 13 13C14.6569 13 16 11.6569 16 10V7C16 5.34315 14.6569 4 13 4V3C13 1.34315 11.6569 0 10 0H6C4.34315 0 3 1.34315 3 3V4ZM3 6H13C13.5523 6 14 6.44772 14 7V10C14 10.5523 13.5523 11 13 11C13 9.34315 11.6569 8 10 8H6C4.34315 8 3 9.34315 3 11C2.44772 11 2 10.5523 2 10V7C2 6.44772 2.44771 6 3 6ZM10 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13V11C11 10.4477 10.5523 10 10 10Z"
				fill="black"
			/>
		</svg>
	);
};
