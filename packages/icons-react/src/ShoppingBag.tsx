// organize-imports-ignore
import React from "react";

export const ShoppingBag = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M8 6C9.10457 6 10 5.10457 10 4C10 3.44772 10.4477 3 11 3C11.5523 3 12 3.44772 12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 3.44772 4.44772 3 5 3C5.55228 3 6 3.44772 6 4C6 5.10457 6.89543 6 8 6Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.1816 2H3.81835C3.29029 2 2.85324 2.41059 2.8203 2.93762L2.1953 12.9376C2.15932 13.5133 2.61653 14 3.19335 14H12.8066C13.3835 14 13.8407 13.5133 13.8047 12.9376L13.1797 2.93762C13.1468 2.41059 12.7097 2 12.1816 2ZM3.81835 0C2.23416 0 0.923014 1.23176 0.824195 2.81287L0.199195 12.8129C0.091252 14.54 1.46289 16 3.19335 16H12.8066C14.5371 16 15.9087 14.54 15.8008 12.8129L15.1758 2.81287C15.077 1.23176 13.7658 0 12.1816 0H3.81835Z"
				fill="black"
			/>
		</svg>
	);
};
