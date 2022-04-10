// organize-imports-ignore
import React from "react";

export const AvatarFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M16 8C16 10.9432 14.4106 13.5152 12.0433 14.9045C10.8569 15.6008 9.47506 16 8 16C6.52494 16 5.14313 15.6008 3.9567 14.9045C1.58939 13.5152 0 10.9432 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.2235 12.2617C12.6625 11.8266 12.7892 11.1507 12.4582 10.6286C11.8377 9.64976 10.7447 9 9.5 9H6.5C5.25528 9 4.16231 9.64976 3.54179 10.6286C3.21083 11.1507 3.33747 11.8266 3.77651 12.2617C4.86075 13.3363 6.35286 14 8 14C9.64713 14 11.1393 13.3363 12.2235 12.2617ZM8 7C9.10457 7 10 6.10457 10 5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5C6 6.10457 6.89543 7 8 7Z"
			/>
		</svg>
	);
};
