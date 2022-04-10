// organize-imports-ignore
import React from "react";

export const SidebarsRightFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M3 0C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H3ZM13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13V3C12 2.44772 12.4477 2 13 2Z"
				fill="black"
			/>
		</svg>
	);
};
