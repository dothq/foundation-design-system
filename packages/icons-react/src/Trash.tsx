// organize-imports-ignore
import React from "react";

export const Trash = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5 2C5 0.895431 5.89543 0 7 0H9C10.1046 0 11 0.895431 11 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H14V13C14 14.6569 12.6569 16 11 16H5C3.34315 16 2 14.6569 2 13V4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H5ZM12 13V4H10.618C10.2393 4 9.893 3.786 9.72361 3.44721L9.27639 2.55279C9.107 2.214 8.76074 2 8.38197 2H7.61803C7.23926 2 6.893 2.214 6.72361 2.55279L6.27639 3.44721C6.107 3.786 5.76074 4 5.38197 4H4V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13Z"
			/>
		</svg>
	);
};
