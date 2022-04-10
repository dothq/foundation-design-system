// organize-imports-ignore
import React from "react";

export const TagFilled = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_1530_65)">
				<path
					d="M4.12132 2.87868C4.68393 2.31607 5.44699 2 6.24264 2H13C14.6569 2 16 3.34315 16 5V11C16 12.6569 14.6569 14 13 14H6.24265C5.447 14 4.68393 13.6839 4.12132 13.1213L1.12132 10.1213C-0.050249 8.94975 -0.0502471 7.05025 1.12133 5.87868L4.12132 2.87868Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1530_65">
					<rect
						width="16"
						height="16"
						fill="white"
						transform="matrix(-1 0 0 1 16 0)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
