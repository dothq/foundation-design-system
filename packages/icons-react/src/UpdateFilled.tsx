// organize-imports-ignore
import React from "react";

export const UpdateFilled = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V10.5858L4.70711 8.29289C4.31658 7.90237 3.68342 7.90237 3.29289 8.29289C2.90237 8.68342 2.90237 9.31658 3.29289 9.70711L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L12.7071 9.70711C13.0976 9.31658 13.0976 8.68342 12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L9 10.5858V3Z"
				fill="black"
			/>
		</svg>
	);
};
