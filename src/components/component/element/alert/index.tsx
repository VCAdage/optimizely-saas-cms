import { gql, type Schema } from "@/gql";
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { getServerContext, getFactory } from "@remkoj/optimizely-cms-react/rsc";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { IconClose } from "../../../shared/icons/IconClose";
import { IconError } from "../../../shared/icons/IconError";

export const AlertElement: CmsComponent<Schema.AlertElementDataFragment> = ({
  data,
  contentLink,
  inEditMode,
}) => {
  const { factory } = getServerContext();
  return (
    <CmsEditable>
      <div className="flex items-center justify-end gap-[22px] relative flex-1 grow">
        <IconError className="!h-[26px] !w-[26px] !relative" />
        <div className="flex items-center flex-1 grow gap-1 relative">
          <div className="inline-flex flex-col items-start flex-[0_0_auto] gap-1 relative">
            <div className="relative w-fit mt-[-1.00px] font-h6-desktop font-[number:var(--h6-desktop-font-weight)] text-ui-palettetext-primary text-[length:var(--h6-desktop-font-size)] tracking-[var(--h6-desktop-letter-spacing)] leading-[var(--h6-desktop-line-height)] whitespace-nowrap [font-style:var(--h6-desktop-font-style)]">
              {data.AlertTitle}
            </div>
            <div className="relative w-fit font-p-small-desktop font-[number:var(--p-small-desktop-font-weight)] text-ui-palettetext-primary text-[length:var(--p-small-desktop-font-size)] tracking-[var(--p-small-desktop-letter-spacing)] leading-[var(--p-small-desktop-line-height)] whitespace-nowrap [font-style:var(--p-small-desktop-font-style)]">
              {data.AlertDescription}
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center relative flex-[0_0_auto] bg-ui-palettebackground rounded-[42px] border border-solid border-[#130b2df5]">
        <div className="inline-flex items-center justify-center gap-1 px-3 py-2 relative flex-[0_0_auto]">
          <IconClose className="!h-6 !w-6 !relative" />
        </div>
      </div>
    </CmsEditable>
  );
};

AlertElement.getDataFragment = () => ["AlertElementData", AlertElementData];

export default AlertElement;

const AlertElementData = gql(`fragment AlertElementData on AlertElement {
  AlertDescription
  AlertTitle
}`);
