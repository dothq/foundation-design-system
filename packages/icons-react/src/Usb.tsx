// organize-imports-ignore
import React from "react";

export const Usb = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M11 3H9V5H11V3Z" fill="black" />
			<path d="M5 3H7V5H5V3Z" fill="black" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 10C13.5523 10 14 10.4477 14 11V15C14 15.5523 14.4477 16 15 16L-nan -nanL15 16C15.5523 16 16 15.5523 16 15V10C16 8.89543 15.1046 8 14 8V3C14 1.34315 12.6569 0 11 0H5C3.34315 0 2 1.34315 2 3V8C0.895431 8 0 8.89543 0 10V15C0 15.5523 0.447715 16 1 16L-nan -nanL1 16C1.55228 16 2 15.5523 2 15V11C2 10.4477 2.44772 10 3 10H13ZM4 8V3C4 2.44772 4.44772 2 5 2H11C11.5523 2 12 2.44772 12 3V8H4Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9 3H11V5H9V3ZM7 3H5V5H7V3Z"
				fill="black"
			/>
		</svg>
	);
};
