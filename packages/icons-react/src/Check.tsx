// organize-imports-ignore
import React from "react";

export const Check = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M14.6941 3.28016C15.0917 3.66352 15.1032 4.29658 14.7198 4.69414L7.00556 12.6941C6.62661 13.0871 6.00251 13.1036 5.6034 12.7311L1.31769 8.73106C0.913935 8.35422 0.892115 7.72143 1.26895 7.31768C1.64578 6.91393 2.27857 6.89211 2.68232 7.26895L6.24879 10.5977L13.2802 3.30587C13.6635 2.90831 14.2966 2.8968 14.6941 3.28016Z"
			/>
		</svg>
	);
};
