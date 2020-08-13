import * as React from "react";

function SvgTrashBlue(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fillOpacity={0.01} fill="#FFF" d="M0 0h16v16H0z" />
        <path
          stroke="#0075FF"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4h12M12.667 4v9.333c0 .737-.597 1.334-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4m2 0V2.667c0-.737.597-1.334 1.334-1.334h2.666c.737 0 1.334.597 1.334 1.334V4M6.667 7.333v4M9.333 7.333v4"
        />
      </g>
    </svg>
  );
}

const MemoSvgTrashBlue = React.memo(SvgTrashBlue);
export default MemoSvgTrashBlue;
