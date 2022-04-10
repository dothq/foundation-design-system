// organize-imports-ignore
import React from "react";

export const Network = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5 4C5 5.10457 5.89543 6 7 6V7H3C2.44771 7 2 7.44772 2 8V10C0.895431 10 0 10.8954 0 12V14C0 15.1046 0.895431 16 2 16H4C5.10457 16 6 15.1046 6 14V12C6 10.8954 5.10457 10 4 10V9H12V10C10.8954 10 10 10.8954 10 12V14C10 15.1046 10.8954 16 12 16H14C15.1046 16 16 15.1046 16 14V12C16 10.8954 15.1046 10 14 10V8C14 7.44772 13.5523 7 13 7H9V6C10.1046 6 11 5.10457 11 4V2C11 0.895431 10.1046 0 9 0H7C5.89543 0 5 0.89543 5 2V4ZM9 2H7V4H9V2ZM2 12V14H4V12H2ZM12 12H14V14H12V12Z"
			/>
		</svg>
	);
};
