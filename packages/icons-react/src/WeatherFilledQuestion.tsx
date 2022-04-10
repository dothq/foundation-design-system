// organize-imports-ignore
import React from "react";

export const WeatherFilledQuestion = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M9.5 2C7.54067 2 5.87381 3.25221 5.25606 5H5C2.23858 5 0 7.23858 0 10C0 12.7614 2.23858 15 5 15H7C8.65685 15 10 13.6569 10 12V9C10 7.34315 11.3431 6 13 6C13.5329 6 13.9528 5.5296 13.7747 5.02734C13.152 3.27149 11.4616 2 9.5 2Z"
				fill="black"
			/>
			<path
				d="M14.4 14.8C14.4 15.2418 14.0418 15.6 13.6 15.6C13.1582 15.6 12.8 15.2418 12.8 14.8C12.8 14.3582 13.1582 14 13.6 14C14.0418 14 14.4 14.3582 14.4 14.8Z"
				fill="black"
			/>
			<path
				d="M16 10.4C16 9.07452 14.9255 8.00001 13.6 8.00001H12.8C12.3582 8.00001 12 8.35818 12 8.80001C12 9.24183 12.3582 9.60001 12.8 9.60001H13.6C14.0418 9.60001 14.4 9.95818 14.4 10.4C14.4 10.8418 14.0418 11.2 13.6 11.2C13.1582 11.2 12.8 11.5582 12.8 12V12.8C12.8 13.2418 13.1582 13.6 13.6 13.6C14.0418 13.6 14.4 13.2418 14.4 12.8C14.4 12.7182 14.452 12.6459 14.5274 12.6142C15.3924 12.2515 16 11.3967 16 10.4Z"
				fill="black"
			/>
		</svg>
	);
};
