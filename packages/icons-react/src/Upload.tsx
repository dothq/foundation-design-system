// organize-imports-ignore
import React from "react";

export const Upload = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_1509_122)">
				<path
					d="M9 3.41421V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V3.41421L4.70711 5.70711C4.31658 6.09763 3.68342 6.09763 3.29289 5.70711C2.90237 5.31658 2.90237 4.68342 3.29289 4.29289L7.29289 0.292894C7.68342 -0.0976312 8.31658 -0.0976312 8.70711 0.292894L12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711C12.3166 6.09763 11.6834 6.09763 11.2929 5.70711L9 3.41421Z"
					fill="black"
				/>
				<path
					d="M16 13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V11C0 10.4477 0.447715 10 1 10C1.55229 10 2 10.4477 2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11V13Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1509_122">
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
