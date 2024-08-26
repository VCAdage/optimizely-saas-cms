import React from "react";

interface Props {
  className: any;
}

export const IconError = ({ className }: Props): JSX.Element => {
  // icon SVG is located in layout.tsx file
  return <svg className={`w-px h-px icon icon-notification ${className}`}><use xlinkHref="#icon-notification"></use></svg>;
};
