// organize-imports-ignore
import React from "react";

export const PlayFilled = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M12.7519 7.16794C13.3457 7.56376 13.3457 8.43621 12.7519 8.83204L3.5547 14.9635C2.89014 15.4066 2 14.9302 2 14.1315V1.8685C2 1.06981 2.89015 0.593416 3.5547 1.03645L12.7519 7.16794Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.7519 8.83204C13.3457 8.43621 13.3457 7.56376 12.7519 7.16794L3.5547 1.03645C2.89015 0.593416 2 1.06981 2 1.8685V14.1315C2 14.9302 2.89014 15.4066 3.5547 14.9635L12.7519 8.83204Z"
			/>
		</svg>
	);
};
