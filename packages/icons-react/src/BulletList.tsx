// organize-imports-ignore
import React from "react";

export const BulletList = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M2 6C3.10457 6 4 5.10457 4 4C4 2.89543 3.10457 2 2 2C0.895431 2 0 2.89543 0 4C0 5.10457 0.895431 6 2 6Z"
				fill="black"
			/>
			<path
				d="M2 14C3.10457 14 4 13.1046 4 12C4 10.8954 3.10457 10 2 10C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14Z"
				fill="black"
			/>
			<path
				d="M6 4C6 3.44772 6.44771 3 7 3H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H7C6.44772 5 6 4.55228 6 4Z"
				fill="black"
			/>
			<path
				d="M7 11C6.44771 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H7Z"
				fill="black"
			/>
		</svg>
	);
};