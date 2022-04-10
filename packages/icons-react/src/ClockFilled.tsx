// organize-imports-ignore
import React from "react";

export const ClockFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44771 4 7 4.44772 7 5V9C7 9.35126 7.1843 9.67677 7.4855 9.85749L9.9855 11.3575C10.4591 11.6416 11.0733 11.4881 11.3575 11.0145C11.6416 10.5409 11.4881 9.92665 11.0145 9.64251L9 8.43381V5Z"
				fill="black"
			/>
		</svg>
	);
};
