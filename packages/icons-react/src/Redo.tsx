// organize-imports-ignore
import React from "react";

export const Redo = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M14.0001 5C14.0001 4.44772 14.4478 4 15 4C15.5523 4 16 4.44772 16 5V10C16 11.1046 15.1046 12 14.0001 12H10.0002C9.44795 12 9.00025 11.5523 9.00025 11C9.00025 10.4477 9.44795 10 10.0002 10H12.8047C12.1503 7.6915 10.0233 6 7.5003 6C4.94536 6 2.79644 7.73461 2.17177 10.088C2.03711 10.5953 1.60889 11 1.08403 11C0.497545 11 0.0269537 10.5012 0.149573 9.92762C0.873735 6.54039 3.88971 4 7.5003 4C10.2746 4 12.6978 5.49987 14.0001 7.73131V5Z"
			/>
		</svg>
	);
};
