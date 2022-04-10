// organize-imports-ignore
import React from "react";

export const BlockFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M7.70156 0H8.29844C10.0472 0 11.744 0.595183 13.1096 1.68765C14.9365 3.14919 16 5.36195 16 7.70156V8.29844C16 10.638 14.9365 12.8508 13.1096 14.3123C11.744 15.4048 10.0472 16 8.29844 16H7.70156C5.95276 16 4.25602 15.4048 2.89043 14.3123C1.06351 12.8508 0 10.638 0 8.29844V7.70156C0 5.36195 1.06351 3.14919 2.89043 1.68765C4.25602 0.595183 5.95276 0 7.70156 0ZM5 7C4.44771 7 4 7.44772 4 8C4 8.55229 4.44771 9 5 9H11C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7H5Z"
				fill="black"
			/>
		</svg>
	);
};
