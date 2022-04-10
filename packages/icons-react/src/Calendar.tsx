// organize-imports-ignore
import React from "react";

export const Calendar = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M6 0C5.44771 0 5 0.447715 5 1V2H4C2.34315 2 1 3.34315 1 5V13C1 14.6569 2.34315 16 4 16H12C13.6569 16 15 14.6569 15 13V5C15 3.34315 13.6569 2 12 2H11V1C11 0.447715 10.5523 0 10 0C9.44772 0 9 0.447715 9 1V2H7V1C7 0.447715 6.55229 0 6 0ZM12 4H11C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4H7C7 4.55228 6.55229 5 6 5C5.44771 5 5 4.55228 5 4H4C3.44772 4 3 4.44772 3 5V6H13V5C13 4.44772 12.5523 4 12 4ZM13 8V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V8H13Z"
				fill="black"
			/>
		</svg>
	);
};
