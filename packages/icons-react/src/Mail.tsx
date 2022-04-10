// organize-imports-ignore
import React from "react";

export const Mail = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M2.00905 3.86487C2.00308 3.90906 2 3.95417 2 4V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V4C14 3.95417 13.9969 3.90906 13.9909 3.86487L9.35145 8.11774C8.58681 8.81866 7.41319 8.81866 6.64855 8.11774L2.00905 3.86487ZM11.9747 3L8 6.64343L4.02535 3H11.9747ZM3 1C1.34315 1 0 2.34315 0 4V12C0 13.6569 1.34315 15 3 15H13C14.6569 15 16 13.6569 16 12V4C16 2.34315 14.6569 1 13 1H3Z"
			/>
		</svg>
	);
};
