import { gql, type Schema } from "@/gql";
import { type CmsComponent } from "@remkoj/optimizely-cms-react"; // Import CmsComponentProps

import { getServerContext, getFactory } from "@remkoj/optimizely-cms-react/rsc";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { AlertItem } from "./AlertItem";

interface Props {
    data: any;
    contentLink: any;
    inEditMode?: any;
    type?: "alert" | "success" | "general" | "caution";
}

export const AlertElement: CmsComponent<Schema.AlertElementDataFragment> = ({
  data,
  contentLink,
  inEditMode,
  type,
}: Props) => {
  const { factory } = getServerContext();
  return (
    <CmsEditable className="w-[1440px] flex items-start gap-2 px-16 py-4 relative">
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
        AlertTitle = {data.AlertTitle}
        AlertDescription = {data.AlertDescription}
      />
    </CmsEditable>
  );
};


AlertElement.getDataFragment = () => ["AlertElementData", AlertElementData];

export default AlertElement;

const AlertElementData = gql(`fragment AlertElementData on AlertElement {
  AlertDescription
  AlertTitle
}`);
