// organize-imports-ignore
import React from "react";

export const Desktop = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H9V14H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16H4C3.44771 16 3 15.5523 3 15C3 14.4477 3.44771 14 4 14H7V12H3C1.34315 12 0 10.6569 0 9V3ZM3 2H13C13.5523 2 14 2.44772 14 3V9C14 9.55228 13.5523 10 13 10H3C2.44772 10 2 9.55228 2 9V3C2 2.44772 2.44772 2 3 2Z"
				fill="black"
			/>
		</svg>
	);
};
