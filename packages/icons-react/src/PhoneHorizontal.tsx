// organize-imports-ignore
import React from "react";

export const PhoneHorizontal = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M12.5 6C12.2239 6 12 6.22386 12 6.5V9.5C12 9.77614 12.2239 10 12.5 10C12.7761 10 13 9.77614 13 9.5V6.5C13 6.22386 12.7761 6 12.5 6Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 2C1.34315 2 0 3.34315 0 5V11C0 12.6569 1.34315 14 3 14H13C14.6569 14 16 12.6569 16 11V5C16 3.34315 14.6569 2 13 2H3ZM3 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H3C2.44772 12 2 11.5523 2 11V5C2 4.44772 2.44772 4 3 4Z"
				fill="black"
			/>
		</svg>
	);
};
