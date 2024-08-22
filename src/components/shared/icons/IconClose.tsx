import React from "react";

interface Props {
  className: any;
}

export const IconClose = ({ className }: Props): JSX.Element => {
  return <div className={`w-px h-px ${className}`} />;
};