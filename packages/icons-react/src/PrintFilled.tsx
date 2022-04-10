// organize-imports-ignore
import React from "react";

export const PrintFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4 3V4H3C1.34315 4 0 5.34315 0 7V9C0 10.6569 1.34315 12 3 12V13C3 14.6569 4.34315 16 6 16H10C11.6569 16 13 14.6569 13 13V12C14.6569 12 16 10.6569 16 9V7C16 5.34315 14.6569 4 13 4H12V3C12 1.34315 10.6569 0 9 0H7C5.34315 0 4 1.34315 4 3ZM9 2H7C6.44772 2 6 2.44772 6 3V4H10V3C10 2.44772 9.55228 2 9 2ZM6 14H10C10.5523 14 11 13.5523 11 13V11C11 10.4477 10.5523 10 10 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14Z"
				fill="black"
			/>
		</svg>
	);
};
