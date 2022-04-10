// organize-imports-ignore
import React from "react";

export const Camera = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8 12.5C9.65685 12.5 11 11.1569 11 9.5C11 7.84315 9.65685 6.5 8 6.5C6.34315 6.5 5 7.84315 5 9.5C5 11.1569 6.34315 12.5 8 12.5ZM8 10.5C8.55228 10.5 9 10.0523 9 9.5C9 8.94772 8.55228 8.5 8 8.5C7.44772 8.5 7 8.94772 7 9.5C7 10.0523 7.44772 10.5 8 10.5Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 3V2C4 0.89543 4.89543 0 6 0H10C11.1046 0 12 0.895431 12 2V3H13C14.6569 3 16 4.34315 16 6V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V6C0 4.34315 1.34315 3 3 3H4ZM6 3C6 2.44772 6.44772 2 7 2H9C9.55228 2 10 2.44772 10 3V4C10 4.55228 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V6C2 5.44772 2.44771 5 3 5H5C5.55228 5 6 4.55228 6 4V3Z"
			/>
		</svg>
	);
};
