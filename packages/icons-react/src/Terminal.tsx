// organize-imports-ignore
import React from "react";

export const Terminal = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M7.70711 7.29289C7.31658 6.90237 6.68342 6.90237 6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711L7.58579 10L6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071C6.68342 13.0976 7.31658 13.0976 7.70711 12.7071L9.70711 10.7071C10.0976 10.3166 10.0976 9.68342 9.70711 9.29289L7.70711 7.29289Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 0C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H3ZM13 2H3C2.44772 2 2 2.44772 2 3V4H14V3C14 2.44772 13.5523 2 13 2ZM14 6H2V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V6Z"
				fill="black"
			/>
		</svg>
	);
};
