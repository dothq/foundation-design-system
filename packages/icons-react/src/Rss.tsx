// organize-imports-ignore
import React from "react";

export const Rss = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M3.99801 5.06165C3.44996 4.99344 3 4.55228 3 4C3 3.44772 3.44901 2.99475 3.9986 3.04924C8.72414 3.51775 12.4823 7.27586 12.9508 12.0014C13.0053 12.551 12.5523 13 12 13C11.4477 13 11.0066 12.55 10.9384 12.002C10.4878 8.38167 7.61833 5.51217 3.99801 5.06165Z" />
			<path d="M3 8C3 8.55228 3.45467 8.98717 3.98988 9.12343C5.40367 9.48335 6.51665 10.5963 6.87657 12.0101C7.01283 12.5453 7.44772 13 8 13C8.55228 13 9.00873 12.5489 8.91774 12.0042C8.49749 9.4883 6.5117 7.50251 3.99581 7.08226C3.45108 6.99127 3 7.44772 3 8Z" />
			<path d="M4 13C4.55229 13 5 12.5523 5 12C5 11.4477 4.55229 11 4 11C3.44771 11 3 11.4477 3 12C3 12.5523 3.44771 13 4 13Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3ZM3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2Z"
			/>
		</svg>
	);
};
