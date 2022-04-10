// organize-imports-ignore
import React from "react";

export const VideoCamera = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M0 5C0 3.34315 1.34315 2 3 2H9C10.6569 2 12 3.34315 12 5V5.32871L12.6713 4.73203C13.9611 3.58553 16 4.50115 16 6.22684V9.77316C16 11.4989 13.9611 12.4145 12.6713 11.268L12 10.6713V11C12 12.6569 10.6569 14 9 14H3C1.34315 14 0 12.6569 0 11V5ZM3 4H9C9.55228 4 10 4.44772 10 5V11C10 11.5523 9.55228 12 9 12H3C2.44772 12 2 11.5523 2 11V5C2 4.44772 2.44772 4 3 4ZM12.0052 8L14 6.22684V9.77316L12.0052 8Z"
			/>
		</svg>
	);
};
