// organize-imports-ignore
import React from "react";

export const Tag = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5.53554 4.29289L2.53554 7.29289C2.14501 7.68342 2.14502 8.31658 2.53554 8.70711L5.53554 11.7071C5.72307 11.8946 5.97743 12 6.24264 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H6.24264C5.97743 4 5.72307 4.10536 5.53554 4.29289ZM4.12132 2.87868L1.12133 5.87868C-0.0502473 7.05025 -0.0502487 8.94975 1.12132 10.1213L4.12132 13.1213C4.68393 13.6839 5.447 14 6.24264 14H13C14.6569 14 16 12.6569 16 11V5C16 3.34315 14.6569 2 13 2H6.24264C5.44699 2 4.68393 2.31607 4.12132 2.87868Z"
				fill="black"
			/>
		</svg>
	);
};
