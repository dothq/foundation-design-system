// organize-imports-ignore
import React from "react";

export const Bell = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M11 13C11 14.6569 9.65688 16 8.00003 16C6.34317 16 5.00003 14.6569 5.00003 13H1.59368C0.488417 13 -0.050689 11.697 0.649378 10.9026C1.08807 10.4047 1.8202 9.51513 2.43725 8.48926C3.07082 7.43593 3.50003 6.37349 3.50003 5.5C3.50003 4.32887 3.76505 2.99883 4.45552 1.92714C5.17497 0.810495 6.35009 0 8.00003 0C9.64997 0 10.8251 0.810495 11.5445 1.92714C12.235 2.99883 12.5 4.32887 12.5 5.5C12.5 6.37349 12.9292 7.43593 13.5628 8.48926C14.1799 9.51513 14.912 10.4047 15.3507 10.9026C16.0507 11.697 15.5116 13 14.4064 13H11ZM5.50003 5.5C5.50003 4.5878 5.71318 3.66784 6.13679 3.01036C6.53143 2.39784 7.10631 2 8.00003 2C8.89375 2 9.46863 2.39784 9.86327 3.01036C10.2869 3.66784 10.5 4.5878 10.5 5.5C10.5 6.92951 11.1619 8.37788 11.8489 9.52013C12.1739 10.0604 12.5233 10.5625 12.8525 11H3.1476C3.47677 10.5625 3.82615 10.0604 4.15111 9.52013C4.83817 8.37788 5.50003 6.92951 5.50003 5.5ZM7.00003 13H9.00003C9.00003 13.5523 8.55231 14 8.00003 14C7.44774 14 7.00003 13.5523 7.00003 13Z"
				fill="black"
			/>
		</svg>
	);
};