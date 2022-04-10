// organize-imports-ignore
import React from "react";

export const AddWindow = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M13 1C14.6569 1 16 2.34315 16 4V6C16 6.55228 15.5523 7 15 7H2V12C2 12.5523 2.44772 13 3 13H5C5.55229 13 6 13.4477 6 14C6 14.5523 5.55229 15 5 15H3C1.34315 15 0 13.6569 0 12V4C0 2.34315 1.34315 1 3 1H13ZM3 3H13C13.5523 3 14 3.44772 14 4V5H2V4C2 3.44772 2.44772 3 3 3ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9Z"
				fill="black"
			/>
		</svg>
	);
};
