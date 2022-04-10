// organize-imports-ignore
import React from "react";

export const Processes = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3ZM3 2H13C13.5523 2 14 2.44772 14 3V7H11C10.6656 7 10.3534 7.1671 10.1679 7.4453L9.30211 8.74406L7.94868 4.68377C7.82791 4.32144 7.51129 4.05954 7.13273 4.00885C6.75418 3.95815 6.37981 4.12751 6.16795 4.4453L4.46482 7H2V3C2 2.44772 2.44772 2 3 2ZM2 9H5C5.33435 9 5.64658 8.8329 5.83205 8.5547L6.69789 7.25594L8.05132 11.3162C8.1721 11.6786 8.48871 11.9405 8.86727 11.9912C9.24582 12.0418 9.62019 11.8725 9.83205 11.5547L11.5352 9H14V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V9Z"
				fill="black"
			/>
		</svg>
	);
};