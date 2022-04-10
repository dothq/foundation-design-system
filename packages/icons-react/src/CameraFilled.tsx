// organize-imports-ignore
import React from "react";

export const CameraFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8 11C9.10457 11 10 10.1046 10 9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9C6 10.1046 6.89543 11 8 11Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 3V2C4 0.89543 4.89543 0 6 0H10C11.1046 0 12 0.895431 12 2V3H13C14.6569 3 16 4.34315 16 6V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V6C0 4.34315 1.34315 3 3 3H4ZM12 9C12 11.2091 10.2091 13 8 13C5.79086 13 4 11.2091 4 9C4 6.79086 5.79086 5 8 5C10.2091 5 12 6.79086 12 9Z"
				fill="black"
			/>
		</svg>
	);
};
