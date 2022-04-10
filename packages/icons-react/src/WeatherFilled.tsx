// organize-imports-ignore
import React from "react";

export const WeatherFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M5.25606 5C5.87381 3.25221 7.54067 2 9.5 2C11.8085 2 13.7109 3.73824 13.97 5.97725C15.2015 6.88797 16 8.35073 16 10C16 12.7614 13.7614 15 11 15H5C2.23858 15 0 12.7614 0 10C0 7.23858 2.23858 5 5 5H5.25606Z"
			/>
		</svg>
	);
};
