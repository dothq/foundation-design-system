// organize-imports-ignore
import React from "react";

export const Folder = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5.91997 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44771 14 3 14H13C13.5523 14 14 13.5523 14 13V6.5C14 5.94772 13.5523 5.5 13 5.5H10.56C8.74367 5.5 7.14737 4.29591 6.64838 2.54944C6.55546 2.22422 6.2582 2 5.91997 2ZM5.91997 0C7.15117 0 8.23319 0.816175 8.57143 2C8.82511 2.88787 9.63663 3.5 10.56 3.5H13C14.6569 3.5 16 4.84315 16 6.5V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H5.91997Z"
				fill="black"
			/>
		</svg>
	);
};
