// organize-imports-ignore
import React from "react";

export const Strikethrough = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8.15638 2.77778H9.08003C9.64239 2.77778 10.1578 2.97124 10.5583 3.29278C10.8175 3.50084 11.1218 3.66667 11.4541 3.66667C12.2044 3.66667 12.7057 2.90913 12.1989 2.35589C11.4373 1.52447 10.3223 1 9.08003 1H8.15638C5.86085 1 3.99995 2.79086 3.99995 5C3.99995 5.21257 4.01718 5.42126 4.05037 5.62486C4.08679 5.8483 4.28836 6 4.51475 6H5.26685C5.6428 6 5.89466 5.58699 5.85771 5.21287C5.85079 5.14281 5.84725 5.0718 5.84725 5C5.84725 3.7727 6.88108 2.77778 8.15638 2.77778Z"
				fill="black"
			/>
			<path
				d="M14 7C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H2C1.44771 9 1 8.55228 1 8C1 7.44772 1.44771 7 2 7H14Z"
				fill="black"
			/>
			<path
				d="M10.1422 10.7871C10.1052 10.413 10.3571 10 10.733 10H11.4852C11.7115 10 11.9131 10.1517 11.9495 10.3751C11.9827 10.5787 12 10.7874 12 11C12 13.2091 10.1391 15 7.84352 15H6.91987C5.6776 15 4.56263 14.4755 3.80098 13.6441C3.29417 13.0909 3.79549 12.3333 4.54578 12.3333C4.87813 12.3333 5.18243 12.4992 5.44159 12.7072C5.8421 13.0288 6.35751 13.2222 6.91987 13.2222H7.84352C9.11882 13.2222 10.1526 12.2273 10.1526 11C10.1526 10.9282 10.1491 10.8572 10.1422 10.7871Z"
				fill="black"
			/>
		</svg>
	);
};