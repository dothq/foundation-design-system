// organize-imports-ignore
import React from "react";

export const Inbox = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3ZM3 4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4V8C13 8.55228 12.5523 9 12 9H10.5C10.2239 9 10.0064 9.22733 9.93829 9.49494C9.71803 10.3601 8.93374 11 8 11C7.06626 11 6.28197 10.3601 6.06171 9.49494C5.99359 9.22733 5.77614 9 5.5 9H4C3.44772 9 3 8.55228 3 8V4Z"
			/>
		</svg>
	);
};
