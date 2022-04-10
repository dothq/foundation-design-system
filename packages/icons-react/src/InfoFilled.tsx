// organize-imports-ignore
import React from "react";

export const InfoFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM9 5C9 5.55228 8.55228 6 8 6C7.44771 6 7 5.55228 7 5C7 4.44772 7.44771 4 8 4C8.55228 4 9 4.44772 9 5ZM9 8C9 7.44772 8.55228 7 8 7C7.44771 7 7 7.44772 7 8V11C7 11.5523 7.44771 12 8 12C8.55228 12 9 11.5523 9 11V8Z"
				fill="black"
			/>
		</svg>
	);
};
