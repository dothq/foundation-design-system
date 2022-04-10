// organize-imports-ignore
import React from "react";

export const NewNote = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M11 9V12M11 15V12M11 12H8M11 12H14"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3.16662 2.64213L3.5 2.52429V2.17071V1C3.5 0.723857 3.72386 0.5 4 0.5C4.27614 0.5 4.5 0.723857 4.5 1V2V2.5H5H7H7.5V2V1C7.5 0.723858 7.72386 0.5 8 0.5C8.27614 0.5 8.5 0.723858 8.5 1V2V2.5H9H11H11.5V2V1C11.5 0.723858 11.7239 0.5 12 0.5C12.2761 0.5 12.5 0.723857 12.5 1V2.17071V2.52429L12.8334 2.64213C13.805 2.98556 14.5 3.91227 14.5 5V6C14.5 6.27614 14.2761 6.5 14 6.5C13.7239 6.5 13.5 6.27614 13.5 6V5C13.5 4.17157 12.8284 3.5 12 3.5H4C3.17157 3.5 2.5 4.17157 2.5 5V13C2.5 13.8284 3.17157 14.5 4 14.5H5C5.27614 14.5 5.5 14.7239 5.5 15C5.5 15.2761 5.27614 15.5 5 15.5H4C2.61929 15.5 1.5 14.3807 1.5 13V5C1.5 3.91227 2.19495 2.98556 3.16662 2.64213Z"
				stroke="black"
			/>
		</svg>
	);
};
