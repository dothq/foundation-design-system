// organize-imports-ignore
import React from "react";

export const Document = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8.99983 0C8.99977 0 8.99988 0 8.99983 0H4C2.34315 0 1 1.34315 1 3V13C1 14.6569 2.34315 16 4 16H12C13.6569 16 15 14.6569 15 13V6C15 5.74408 14.9024 5.48816 14.7071 5.29289L9.70711 0.292893C9.51184 0.0976311 9.25575 0 8.99983 0ZM12.5858 6L9 2.41421V6H12.5858ZM7 7V2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V8H8C7.44772 8 7 7.55228 7 7Z"
				fill="black"
			/>
		</svg>
	);
};
