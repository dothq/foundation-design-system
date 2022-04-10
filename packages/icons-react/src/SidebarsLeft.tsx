// organize-imports-ignore
import React from "react";

export const SidebarsLeft = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M4 3C4.55228 3 5 3.44772 5 4V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 3C16 1.34315 14.6569 0 13 0H3C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3ZM13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2Z"
			/>
		</svg>
	);
};
