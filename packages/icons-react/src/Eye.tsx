// organize-imports-ignore
import React from "react";

export const Eye = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.646271 6.37697C2.06716 4.60003 4.70857 2 7.99999 2C11.2914 2 13.9328 4.60003 15.3537 6.37697C16.1361 7.35542 16.2279 8.69219 15.516 9.72304C14.2917 11.4958 11.8762 14 7.99999 14C4.12377 14 1.70832 11.4958 0.484012 9.72304C-0.227913 8.69219 -0.13612 7.35541 0.646271 6.37697ZM2.20829 7.626C2.84931 6.82435 3.72871 5.88649 4.76645 5.1621C5.80425 4.43767 6.89276 4 7.99999 4C9.10722 4 10.1957 4.43767 11.2335 5.1621C12.2713 5.88649 13.1507 6.82435 13.7917 7.626C14.0629 7.96521 14.0448 8.33381 13.8703 8.5865C12.7996 10.1368 10.9094 12 7.99999 12C5.09058 12 3.20035 10.1368 2.1297 8.5865C1.95518 8.33381 1.93705 7.96521 2.20829 7.626Z"
			/>
		</svg>
	);
};
