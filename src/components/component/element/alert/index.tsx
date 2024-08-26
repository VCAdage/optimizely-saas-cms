import { gql, type Schema } from "@/gql";
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { getServerContext, getFactory } from "@remkoj/optimizely-cms-react/rsc";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { AlertItem } from "./AlertItem";
import { IconClose } from "../../../shared/icons/IconClose";
import { IconError } from "../../../shared/icons/IconError";

interface Props {
  data: any;
  contentLink: string;
  inEditMode: boolean;
  type: "alert" | "success" | "general" | "caution";
  size: "l";
  state: "default";
  mode: "light";
}

export const AlertElement: CmsComponent<Schema.AlertElementDataFragment> = ({
  data,
  contentLink,
  inEditMode,
  type,
  size,
  state,
  mode,
}: Props) => {
  const { factory } = getServerContext();
  return (
    <div className="w-[1440px] flex items-start gap-2 px-16 py-4 relative">
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
        AlertTitle = {data.AlertTitle}
        AlertDescription = {data.AlertDescription}
      />
    </div>
  );
};


AlertElement.getDataFragment = () => ["AlertElementData", AlertElementData];

export default AlertElement;

const AlertElementData = gql(`fragment AlertElementData on AlertElement {
  AlertDescription
  AlertTitle
}`);
