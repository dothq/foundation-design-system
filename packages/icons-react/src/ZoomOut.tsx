// organize-imports-ignore
import React from "react";

export const ZoomOut = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M4 7C4 6.44772 4.44771 6 5 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H5C4.44771 8 4 7.55228 4 7Z"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.2001 12.6004C10.0302 13.4792 8.57591 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.57591 13.4792 10.0302 12.6004 11.2001C12.6376 11.2281 12.6733 11.259 12.7071 11.2929L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.259 12.6733 11.2281 12.6376 11.2001 12.6004ZM7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
				fill="black"
			/>
		</svg>
	);
};
