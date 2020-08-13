import * as React from "react";

function SvgBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <rect fill="#F5F7F9" width={24} height={24} rx={4} />
        <path
          d="M8.364 5.455C8.364 4.65 9.014 4 9.818 4h4.364c.803 0 1.454.651 1.454 1.455v2.181h2.909c.804 0 1.455.652 1.455 1.455v2.182H4V9.09c0-.803.651-1.455 1.455-1.455h2.909V5.455zm1.454 2.181h4.364V5.818c0-.2-.163-.363-.364-.363h-3.636c-.201 0-.364.162-.364.363v1.818zm4.364 5.455c0-.2.163-.364.363-.364H20v5.091c0 .804-.651 1.455-1.455 1.455H5.455A1.455 1.455 0 014 17.818v-5.091h5.455c.2 0 .363.163.363.364v1.09c0 .402.326.728.727.728h2.91a.727.727 0 00.727-.727V13.09z"
          fill="#0075ff"
        />
      </g>
    </svg>
  );
}

const MemoSvgBriefcase = React.memo(SvgBriefcase);
export default MemoSvgBriefcase;
