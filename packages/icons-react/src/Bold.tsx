// organize-imports-ignore
import React from "react";

export const Bold = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4 12.3333C4 13.8061 5.19391 15 6.66667 15H8C10.2091 15 12 13.2091 12 11C12 9.80531 11.4762 8.73295 10.6458 8C11.4762 7.26706 12 6.19469 12 5C12 2.79086 10.2091 1 8 1H6.66667C5.19391 1 4 2.19391 4 3.66667V12.3333ZM6.66667 3H8C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7H6V3.66667C6 3.29848 6.29848 3 6.66667 3ZM8 9C9.10457 9 10 9.89543 10 11C10 12.1046 9.10457 13 8 13H6.66667C6.29848 13 6 12.7015 6 12.3333V9H8Z"
				fill="black"
			/>
		</svg>
	);
};
