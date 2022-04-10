// organize-imports-ignore
import React from "react";

export const SidebarsRight = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M12 3C11.4477 3 11 3.44772 11 4V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3ZM3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2Z"
				fill="black"
			/>
		</svg>
	);
};
