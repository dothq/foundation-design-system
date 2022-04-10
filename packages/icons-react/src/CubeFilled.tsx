// organize-imports-ignore
import React from "react";

export const CubeFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M6.40527 0.419121L2.11955 2.84276C1.11806 3.40911 0.5 4.46313 0.5 5.60466V10.3953C0.5 11.5369 1.11806 12.5909 2.11955 13.1572L6.40527 15.5809C7.39344 16.1397 8.60656 16.1397 9.59473 15.5809L13.8804 13.1572C14.8819 12.5909 15.5 11.5369 15.5 10.3953V5.60466C15.5 4.46312 14.8819 3.40911 13.8804 2.84276L9.59473 0.419121C8.60656 -0.139707 7.39344 -0.139707 6.40527 0.419121Z"
				fill="black"
			/>
		</svg>
	);
};
