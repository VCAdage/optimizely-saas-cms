import PropTypes from "prop-types";
import React from "react";
import { AlertItem } from "./AlertItem";

interface Props {
  type: "alert" | "success" | "general" | "caution";
  size: "l";
  state: "default";
  mode: "light";
}

export const AlertBanner = ({ type, size, state, mode }: Props): JSX.Element => {
  return (
    <div className="w-[1440px] flex items-start gap-2 px-16 py-4 bg-[#ffffff] relative">
      <AlertItem
        className={
          type === "success"
            ? "!flex-1 !grow !bg-alert-palettealert-good"
            : type === "caution"
            ? "!flex-1 !grow !bg-alert-palettealert-caution"
            : type === "alert"
            ? "!flex-1 !grow !bg-alert-palettealert-negative"
            : "!flex-1 !grow"
        }
        size="l"
      />
    </div>
  );
};

AlertBanner.propTypes = {
  type: PropTypes.oneOf(["alert", "success", "general", "caution"]),
  size: PropTypes.oneOf(["l"]),
  state: PropTypes.oneOf(["default"]),
  mode: PropTypes.oneOf(["light"]),
};