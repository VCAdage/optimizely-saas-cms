import React from "react";

interface Props {
  className: any;
}

export const IconClose = ({ className }: Props): JSX.Element => {
  // icon SVG is located in layout.tsx file
  return <svg className={`w-px h-px icon icon-cross ${className}`}><use xlinkHref="#icon-cross"></use></svg>;
};
