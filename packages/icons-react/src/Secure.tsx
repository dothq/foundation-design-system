// organize-imports-ignore
import React from "react";

export const Secure = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M12.2499 5.01026C12.1123 4.99891 12 4.88807 12 4.75V4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4V4.75C4 4.88807 3.88768 4.99891 3.75008 5.01026C2.21016 5.13726 1 6.42731 1 8V13C1 14.6569 2.34315 16 4 16H12C13.6569 16 15 14.6569 15 13V8C15 6.42731 13.7898 5.13726 12.2499 5.01026ZM10 4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V4.75C6 4.88807 6.11193 5 6.25 5H9.75C9.88807 5 10 4.88807 10 4.75V4ZM3 8C3 7.44772 3.44771 7 4 7H12C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V8Z"
			/>
		</svg>
	);
};
