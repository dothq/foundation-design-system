// organize-imports-ignore
import React from "react";

export const Italic = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44771 3 5 3H8.71922L6.21922 13H3C2.44772 13 2 13.4477 2 14C2 14.5523 2.44771 15 3 15H12C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13H8.28078L10.7808 3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H5Z"
				fill="black"
			/>
		</svg>
	);
};
