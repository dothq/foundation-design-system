// organize-imports-ignore
import React from "react";

export const Paste = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4.49982 1C4.95592 0.392776 5.68209 0 6.5 0H9.5C10.3179 0 11.0441 0.392777 11.5002 1H12C13.6569 1 15 2.34315 15 4V13C15 14.6569 13.6569 16 12 16H4C2.34315 16 1 14.6569 1 13V4C1 2.34315 2.34315 1 4 1H4.49982ZM6.5 2H9.5C9.77614 2 10 2.22386 10 2.5C10 2.77614 9.77614 3 9.5 3H6.5C6.22386 3 6 2.77614 6 2.5C6 2.22386 6.22386 2 6.5 2ZM4.03905 2.94254C4.24797 4.11217 5.2703 5 6.5 5H9.5C10.7095 5 11.7184 4.14112 11.95 3H12C12.5523 3 13 3.44772 13 4V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V4C3 3.44772 3.44771 3 4 3H4.05001C4.04614 2.98093 4.04248 2.96177 4.03905 2.94254Z"
				fill="black"
			/>
		</svg>
	);
};
