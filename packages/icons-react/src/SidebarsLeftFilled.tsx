// organize-imports-ignore
import React from "react";

export const SidebarsLeftFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M13 0C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H13ZM3 2C2.44771 2 2 2.44772 2 3V13C2 13.5523 2.44771 14 3 14C3.55229 14 4 13.5523 4 13V3C4 2.44772 3.55229 2 3 2Z"
				fill="black"
			/>
		</svg>
	);
};
