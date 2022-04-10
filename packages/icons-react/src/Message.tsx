// organize-imports-ignore
import React from "react";

export const Message = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9Z" />
			<path d="M5 9C5.55229 9 6 8.55228 6 8C6 7.44772 5.55229 7 5 7C4.44771 7 4 7.44772 4 8C4 8.55228 4.44771 9 5 9Z" />
			<path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44771 7 7 7.44772 7 8C7 8.55228 7.44771 9 8 9Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 8C0 4.68629 2.68629 2 6 2H10C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14H6C2.68629 14 0 11.3137 0 8ZM6 4H10C12.2091 4 14 5.79086 14 8C14 10.2091 12.2091 12 10 12H6C3.79086 12 2 10.2091 2 8C2 5.79086 3.79086 4 6 4Z"
			/>
		</svg>
	);
};
