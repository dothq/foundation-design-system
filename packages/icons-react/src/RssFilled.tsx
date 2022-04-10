// organize-imports-ignore
import React from "react";

export const RssFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M3 0C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H3ZM3.19762 4.47398C2.53995 4.39213 2 3.86274 2 3.2C2 2.53726 2.53881 1.9937 3.19832 2.05908C8.86897 2.6213 13.3787 7.13103 13.9409 12.8017C14.0063 13.4612 13.4627 14 12.8 14C12.1373 14 11.6079 13.4601 11.526 12.8024C10.9854 8.458 7.542 5.01461 3.19762 4.47398ZM2 8C2 8.66274 2.5456 9.18461 3.18786 9.34811C4.8844 9.78002 6.21998 11.1156 6.65189 12.8121C6.81539 13.4544 7.33726 14 8 14C8.66274 14 9.21048 13.4587 9.10129 12.805C8.59699 9.78596 6.21404 7.40301 3.19498 6.89871C2.54129 6.78952 2 7.33726 2 8ZM3.2 14C3.86274 14 4.4 13.4627 4.4 12.8C4.4 12.1373 3.86274 11.6 3.2 11.6C2.53726 11.6 2 12.1373 2 12.8C2 13.4627 2.53726 14 3.2 14Z"
				fill="black"
			/>
		</svg>
	);
};
