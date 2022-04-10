// organize-imports-ignore
import React from "react";

export const CalendarMonths = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M9 10V12H7V10H9Z" fill="black" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 1C5 0.447715 5.44771 0 6 0C6.55229 0 7 0.447715 7 1V2H9V1C9 0.447715 9.44772 0 10 0C10.5523 0 11 0.447715 11 1V2H12C13.6569 2 15 3.34315 15 5V13C15 14.6569 13.6569 16 12 16H4C2.34315 16 1 14.6569 1 13V5C1 3.34315 2.34315 2 4 2H5V1ZM11 4H12C12.5523 4 13 4.44772 13 5V6H3V5C3 4.44772 3.44772 4 4 4H5C5 4.55228 5.44771 5 6 5C6.55229 5 7 4.55228 7 4H9C9 4.55228 9.44772 5 10 5C10.5523 5 11 4.55228 11 4ZM13 10V8H11V10H13ZM13 12V13C13 13.5523 12.5523 14 12 14H11V12H9V14H7V12H5V14H4C3.44772 14 3 13.5523 3 13V12H5V10H3V8H5V10H7V8H9V10H11V12H13Z"
				fill="black"
			/>
		</svg>
	);
};
