// organize-imports-ignore
import React from "react";

export const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4.29289 1.29289C3.90237 1.68342 3.90237 2.31658 4.29289 2.70711L9.58579 8L4.29289 13.2929C3.90237 13.6834 3.90237 14.3166 4.29289 14.7071C4.68342 15.0976 5.31658 15.0976 5.70711 14.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L5.70711 1.29289C5.31658 0.902369 4.68342 0.902369 4.29289 1.29289Z"
			/>
		</svg>
	);
};
