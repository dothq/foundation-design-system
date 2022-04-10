// organize-imports-ignore
import React from "react";

export const ChevronDown12 = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.292893 3.29289C0.683417 2.90237 1.31658 2.90237 1.70711 3.29289L6 7.58579L10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289C12.0976 3.68342 12.0976 4.31658 11.7071 4.70711L6.70711 9.70711C6.31658 10.0976 5.68342 10.0976 5.29289 9.70711L0.292893 4.70711C-0.0976311 4.31658 -0.0976311 3.68342 0.292893 3.29289Z"
			/>
		</svg>
	);
};
