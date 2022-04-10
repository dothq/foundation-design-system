// organize-imports-ignore
import React from "react";

export const NewsFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M0 4C0 2.34315 1.34315 1 3 1H11C12.6569 1 14 2.34315 14 4V5H15C15.5523 5 16 5.44772 16 6V12C16 13.6569 14.6569 15 13 15H3C1.34315 15 0 13.6569 0 12V4ZM5 4C5 3.44772 5.44772 3 6 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H6C5.44771 5 5 4.55228 5 4ZM4 4C4 4.55228 3.55229 5 3 5C2.44771 5 2 4.55228 2 4C2 3.44772 2.44771 3 3 3C3.55229 3 4 3.44772 4 4ZM2 8C2 7.44772 2.44771 7 3 7H11C11.5523 7 12 7.44772 12 8C12 8.55229 11.5523 9 11 9H3C2.44772 9 2 8.55229 2 8ZM2 12C2 11.4477 2.44771 11 3 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H3C2.44772 13 2 12.5523 2 12Z"
				fill="black"
			/>
		</svg>
	);
};