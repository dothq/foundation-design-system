// organize-imports-ignore
import React from "react";

export const PhotoFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M3 0C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H3ZM5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7ZM3 14H13C13.5523 14 14 13.5523 14 13C14 12.3424 13.8469 11.6938 13.5528 11.1056L11.5924 7.18478C11.3317 6.66336 10.6018 6.62571 10.2888 7.11754L7.57958 11.3749C7.54152 11.4347 7.45505 11.437 7.41384 11.3794L5.63159 8.88421C5.32652 8.45712 4.68839 8.4674 4.39725 8.90411L2.27735 12.084C2.0965 12.3552 2 12.674 2 13C2 13.5523 2.44772 14 3 14Z"
				fill="black"
			/>
		</svg>
	);
};
