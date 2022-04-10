// organize-imports-ignore
import React from "react";

export const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M1.29289 11.7071C1.68342 12.0976 2.31658 12.0976 2.70711 11.7071L8 6.41421L13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071C15.0976 11.3166 15.0976 10.6834 14.7071 10.2929L8.70711 4.29289C8.31658 3.90237 7.68342 3.90237 7.29289 4.29289L1.29289 10.2929C0.902369 10.6834 0.902369 11.3166 1.29289 11.7071Z"
			/>
		</svg>
	);
};
