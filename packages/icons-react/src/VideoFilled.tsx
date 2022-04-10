// organize-imports-ignore
import React from "react";

export const VideoFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M0 4C0 2.34315 1.34315 1 3 1H13C14.6569 1 16 2.34315 16 4V12C16 13.6569 14.6569 15 13 15H3C1.34315 15 0 13.6569 0 12V4ZM3 3H13C13.5523 3 14 3.44772 14 4V12C14 12.5523 13.5523 13 13 13H3C2.44772 13 2 12.5523 2 12V4C2 3.44772 2.44772 3 3 3Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 3H3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V4C14 3.44772 13.5523 3 13 3ZM6 5.8831V10.1169C6 10.5056 6.42399 10.7456 6.75725 10.5457L10.2854 8.42875C10.6091 8.23455 10.6091 7.76546 10.2854 7.57125L6.75725 5.45435C6.42399 5.25439 6 5.49445 6 5.8831Z"
				fill="black"
			/>
		</svg>
	);
};
