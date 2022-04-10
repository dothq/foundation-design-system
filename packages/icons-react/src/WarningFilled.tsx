// organize-imports-ignore
import React from "react";

export const WarningFilled = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_1510_470)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.67433 1.50407L0.165688 13.7982C-0.363195 14.7972 0.361009 16 1.49137 16H14.5087C15.639 16 16.3632 14.7972 15.8343 13.7982L9.32569 1.50407C8.76228 0.439844 7.23774 0.439847 6.67433 1.50407ZM7.00001 6.00001C7.00001 5.44772 7.44773 5.00001 8.00001 5.00001C8.5523 5.00001 9.00001 5.44772 9.00001 6.00001V9.00001C9.00001 9.55229 8.5523 10 8.00001 10C7.44773 10 7.00001 9.55229 7.00001 9.00001V6.00001ZM7.00001 13C7.00001 12.4477 7.44773 12 8.00001 12C8.5523 12 9.00001 12.4477 9.00001 13C9.00001 13.5523 8.5523 14 8.00001 14C7.44773 14 7.00001 13.5523 7.00001 13Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1510_470">
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
