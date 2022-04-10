// organize-imports-ignore
import React from "react";

export const Phone = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_1509_42)">
				<path
					d="M6.5 12C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13H9.5C9.77614 13 10 12.7761 10 12.5C10 12.2239 9.77614 12 9.5 12H6.5Z"
					fill="black"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14 3.00003C14 1.34318 12.6569 3.05176e-05 11 3.05176e-05H5C3.34315 3.05176e-05 2 1.34318 2 3.00003V13C2 14.6569 3.34315 16 5 16H11C12.6569 16 14 14.6569 14 13V3.00003ZM12 13V3.00003C12 2.44775 11.5523 2.00003 11 2.00003H5C4.44772 2.00003 4 2.44775 4 3.00003V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1509_42">
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
