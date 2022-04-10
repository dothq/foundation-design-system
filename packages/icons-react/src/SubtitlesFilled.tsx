// organize-imports-ignore
import React from "react";

export const SubtitlesFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M3 1C1.34315 1 0 2.34315 0 4V12C0 13.6569 1.34315 15 3 15H13C14.6569 15 16 13.6569 16 12V4C16 2.34315 14.6569 1 13 1H3ZM2 9C2 8.44772 2.44772 8 3 8H13C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10H3C2.44771 10 2 9.55228 2 9ZM2 12C2 11.4477 2.44772 11 3 11H9C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H3C2.44771 13 2 12.5523 2 12ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H12Z"
			/>
		</svg>
	);
};
