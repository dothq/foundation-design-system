// organize-imports-ignore
import React from "react";

export const Copy = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M9 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H9C9.55228 10 10 9.55228 10 9V3C10 2.44772 9.55228 2 9 2ZM3 0C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H9C10.6569 12 12 10.6569 12 9V3C12 1.34315 10.6569 0 9 0H3Z"
				fill="black"
			/>
			<path
				d="M12 4H13C14.6569 4 16 5.34315 16 7V13C16 14.6569 14.6569 16 13 16H7C5.34315 16 4 14.6569 4 13V12H6V13C6 13.5523 6.44772 14 7 14H13C13.5523 14 14 13.5523 14 13V7C14 6.44772 13.5523 6 13 6H12V4Z"
				fill="black"
			/>
		</svg>
	);
};
