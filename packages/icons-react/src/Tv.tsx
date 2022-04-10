// organize-imports-ignore
import React from "react";

export const Tv = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M0 4C0 2.34315 1.34315 1 3 1H13C14.6569 1 16 2.34315 16 4V10C16 11.6569 14.6569 13 13 13H9H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H4C3.44771 15 3 14.5523 3 14C3 13.4477 3.44771 13 4 13H7H3C1.34315 13 0 11.6569 0 10V4ZM3 3H13C13.5523 3 14 3.44772 14 4V10C14 10.5523 13.5523 11 13 11H3C2.44772 11 2 10.5523 2 10V4C2 3.44772 2.44772 3 3 3Z"
				fill="black"
			/>
		</svg>
	);
};
