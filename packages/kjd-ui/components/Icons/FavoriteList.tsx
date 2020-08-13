import * as React from "react";

function SvgFavoriteList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <rect fill="#F5F7F9" width={24} height={24} rx={4} />
        <g fill="#27AD60">
          <path d="M12.998 4.356c-.299-.919-1.602-.919-1.9 0L9.578 9.015H4.668c-.968 0-1.37 1.236-.587 1.803l3.973 2.88-1.518 4.66c-.299.918.755 1.681 1.538 1.114l3.974-2.88V12.81c0-.421.34-.762.762-.762h5.508l1.697-1.23c.783-.567.38-1.803-.588-1.803h-4.911l-1.518-4.66z" />
          <path
            d="M13.571 13.952c0-.21.171-.38.381-.38h6.096c.21 0 .38.17.38.38v1.524c0 .21-.17.381-.38.381h-6.096a.381.381 0 01-.38-.38v-1.525zM13.571 17.762c0-.21.171-.381.381-.381h6.096c.21 0 .38.17.38.38v1.525c0 .21-.17.38-.38.38h-6.096a.381.381 0 01-.38-.38v-1.524z"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoSvgFavoriteList = React.memo(SvgFavoriteList);
export default MemoSvgFavoriteList;
