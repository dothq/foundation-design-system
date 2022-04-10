// organize-imports-ignore
import React from "react";

export const Building = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4 3.5C4 3.22386 4.22386 3 4.5 3H5.5C5.77614 3 6 3.22386 6 3.5V4.5C6 4.77614 5.77614 5 5.5 5H4.5C4.22386 5 4 4.77614 4 4.5V3.5Z"
				fill="black"
			/>
			<path
				d="M7.5 3C7.22386 3 7 3.22386 7 3.5V4.5C7 4.77614 7.22386 5 7.5 5H8.5C8.77614 5 9 4.77614 9 4.5V3.5C9 3.22386 8.77614 3 8.5 3H7.5Z"
				fill="black"
			/>
			<path
				d="M10 3.5C10 3.22386 10.2239 3 10.5 3H11.5C11.7761 3 12 3.22386 12 3.5V4.5C12 4.77614 11.7761 5 11.5 5H10.5C10.2239 5 10 4.77614 10 4.5V3.5Z"
				fill="black"
			/>
			<path
				d="M4.5 6C4.22386 6 4 6.22386 4 6.5V7.5C4 7.77614 4.22386 8 4.5 8H5.5C5.77614 8 6 7.77614 6 7.5V6.5C6 6.22386 5.77614 6 5.5 6H4.5Z"
				fill="black"
			/>
			<path
				d="M7 6.5C7 6.22386 7.22386 6 7.5 6H8.5C8.77614 6 9 6.22386 9 6.5V7.5C9 7.77614 8.77614 8 8.5 8H7.5C7.22386 8 7 7.77614 7 7.5V6.5Z"
				fill="black"
			/>
			<path
				d="M10.5 6C10.2239 6 10 6.22386 10 6.5V7.5C10 7.77614 10.2239 8 10.5 8H11.5C11.7761 8 12 7.77614 12 7.5V6.5C12 6.22386 11.7761 6 11.5 6H10.5Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 16C13.6569 16 15 14.6569 15 13V3C15 1.34315 13.6569 0 12 0H4C2.34315 0 1 1.34315 1 3V13C1 14.6569 2.34315 16 4 16H12ZM4 2H12C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14H11V10C11 9.44772 10.5523 9 10 9H6C5.44772 9 5 9.44771 5 10V14H4C3.44772 14 3 13.5523 3 13V3C3 2.44772 3.44772 2 4 2ZM7 14V11H9V14H7Z"
				fill="black"
			/>
		</svg>
	);
};