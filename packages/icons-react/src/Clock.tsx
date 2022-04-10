// organize-imports-ignore
import React from "react";

export const Clock = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M9 5C9 4.44772 8.55228 4 8 4C7.44771 4 7 4.44772 7 5V9C7 9.35126 7.1843 9.67677 7.4855 9.85749L9.9855 11.3575C10.4591 11.6416 11.0733 11.4881 11.3575 11.0145C11.6416 10.5409 11.4881 9.92665 11.0145 9.64251L9 8.43381V5Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
			/>
		</svg>
	);
};
