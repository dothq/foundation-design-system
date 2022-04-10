// organize-imports-ignore
import React from "react";

export const Night = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_1509_54)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.99988 2C7.99988 6.41828 11.5817 10 16 10L15.1216 11.962C13.7175 14.3766 11.1022 16 8.1077 16C3.62987 16 -0.00012207 12.37 -0.00012207 7.89216C-0.00012207 4.07218 2.44496 0.858654 6.0012 0H7.99988V1V2ZM13.0043 11.5436C8.9926 10.2856 6.06922 6.56784 6.0012 2.15732C3.66587 3.01539 1.99988 5.25921 1.99988 7.89216C1.99988 11.2654 4.73444 14 8.1077 14C10.1119 14 11.8907 13.0346 13.0043 11.5436Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1509_54">
					<rect
						width="16"
						height="16"
						fill="white"
						transform="matrix(-1 0 0 1 16 0)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
