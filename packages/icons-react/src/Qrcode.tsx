// organize-imports-ignore
import React from "react";

export const Qrcode = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				x="1"
				y="1"
				width="5"
				height="5"
				rx="2"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				x="10"
				y="1"
				width="5"
				height="5"
				rx="2"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				x="1"
				y="10"
				width="5"
				height="5"
				rx="2"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect x="9" y="9" width="3" height="3" rx="1" />
			<rect x="13" y="9" width="3" height="3" rx="1" />
			<rect x="13" y="13" width="3" height="3" rx="1" />
			<rect x="9" y="13" width="3" height="3" rx="1" />
		</svg>
	);
};
