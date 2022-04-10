// organize-imports-ignore
import React from "react";

export const Undo = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M2 5C2 4.44772 1.55228 4 1 4C0.447715 4 0 4.44772 0 5V10C0 11.1046 0.89543 12 2 12H6C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10H3.19543C3.84979 7.6915 5.97693 6 8.5 6C11.055 6 13.204 7.73461 13.8287 10.088C13.9634 10.5953 14.3916 11 14.9165 11C15.503 11 15.9736 10.5012 15.851 9.92762C15.1268 6.54039 12.1107 4 8.5 4C5.7256 4 3.30227 5.49987 2 7.73131V5Z"
			/>
		</svg>
	);
};
