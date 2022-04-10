// organize-imports-ignore
import React from "react";

export const LabBottle = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M7.98214 4.00003L8 4L8.01786 4.00003H7.98214Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 0C3.44772 0 3 0.447715 3 1C3 1.55228 3.44772 2 4 2C4.55228 2 5 2.44772 5 3V4.2259C5 4.58287 4.80577 4.9075 4.51534 5.11505C2.99259 6.20324 2 7.9857 2 10C2 13.3137 4.68629 16 8 16C11.3137 16 14 13.3137 14 10C14 7.9857 13.0074 6.20324 11.4847 5.11505C11.1942 4.9075 11 4.58287 11 4.2259V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 1.55228 13 1C13 0.447715 12.5523 0 12 0H4ZM7 3V5.35081C7 5.80709 6.68416 6.19385 6.27273 6.39113C5.46879 6.77661 4.81363 7.4228 4.4168 8.22018C4.3331 8.38836 4.44133 8.58275 4.62598 8.61737L11.6447 9.93338C11.8293 9.968 12.0007 9.82595 11.9839 9.63885C11.8555 8.20346 10.9688 6.98641 9.72727 6.39113C9.31584 6.19385 9 5.80709 9 5.35081V3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3Z"
			/>
		</svg>
	);
};
