// organize-imports-ignore
import React from "react";

export const Microphone = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5.00001 3C5.00001 1.34315 6.34315 0 8.00001 0C9.65686 0 11 1.34315 11 3V7C11 8.65685 9.65686 10 8.00001 10C6.34315 10 5.00001 8.65685 5.00001 7V3ZM9.00001 3V7C9.00001 7.55228 8.55229 8 8.00001 8C7.44772 8 7.00001 7.55228 7.00001 7V3C7.00001 2.44772 7.44772 2 8.00001 2C8.55229 2 9.00001 2.44772 9.00001 3Z"
			/>
			<path d="M11.8766 7.98988C12.0128 7.45467 12.4477 7 13 7C13.5523 7 14.0087 7.45108 13.9178 7.99581C13.4975 10.5114 11.5121 12.4971 8.99666 12.9176C8.99888 12.9448 9.00001 12.9723 9.00001 13V14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H6.00001C5.44772 16 5.00001 15.5523 5.00001 15C5.00001 14.4477 5.44772 14 6.00001 14H7.00001V13C7.00001 12.9723 7.00114 12.9448 7.00336 12.9176C4.48787 12.4971 2.50247 10.5114 2.08226 7.99581C1.99127 7.45108 2.44772 7 3.00001 7C3.55229 7 3.98718 7.45467 4.12344 7.98988C4.56395 9.72024 6.13253 11 8.00001 11C9.86749 11 11.4361 9.72024 11.8766 7.98988Z" />
		</svg>
	);
};
