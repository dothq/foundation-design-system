// organize-imports-ignore
import React from "react";

export const TagAlt = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M14.6386 6.58629L8.88632 0.612717C8.50931 0.221209 7.9892 0 7.44568 0H3C1.34315 0 0 1.34315 0 3V7.44568C0 7.9892 0.221208 8.50931 0.612717 8.88632L6.58629 14.6386C7.37134 15.3946 8.61713 15.3829 9.38778 14.6122L14.6122 9.38778C15.3829 8.61713 15.3946 7.37134 14.6386 6.58629ZM7.74069 2.30636C7.55219 2.1106 7.29213 2 7.02037 2H3C2.44772 2 2 2.44772 2 3V7.02037C2 7.29213 2.1106 7.55219 2.30636 7.74069L7.26671 12.5173C7.65924 12.8953 8.28214 12.8894 8.66746 12.5041L12.5041 8.66746C12.8894 8.28213 12.8953 7.65923 12.5173 7.26671L7.74069 2.30636Z"
			/>
		</svg>
	);
};
