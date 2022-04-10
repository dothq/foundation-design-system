// organize-imports-ignore
import React from "react";

export const Photo = (props: React.SVGProps<SVGSVGElement>) => {
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
				width="14"
				height="14"
				rx="2"
				stroke="black"
				stroke-width="2"
			/>
			<circle cx="5" cy="5" r="2" fill="black" />
			<path
				d="M4.39725 8.90413L1.77735 12.834C1.44507 13.3324 1.80237 14 2.40139 14H13.7865C14.344 14 14.7066 13.4133 14.4573 12.9146L11.5924 7.1848C11.3317 6.66337 10.6018 6.62572 10.2888 7.11755L7.57958 11.3749C7.54152 11.4347 7.45505 11.4371 7.41384 11.3794L5.63159 8.88422C5.32652 8.45713 4.68839 8.46742 4.39725 8.90413Z"
				fill="black"
			/>
		</svg>
	);
};
