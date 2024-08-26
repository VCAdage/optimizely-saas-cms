import { gql, type Schema } from "@/gql";
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { getServerContext, getFactory } from "@remkoj/optimizely-cms-react/rsc";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { IconClose } from "../../../shared/icons/IconClose";
import { IconError } from "../../../shared/icons/IconError";

interface Props {
  data: any;
  contentLink: string;
  inEditMode: boolean;
  size: string;
  className: string;
  AlertTitle: string;
  AlertDescription: string;
}

export const AlertItem: CmsComponent<Schema.AlertElementDataFragment> = ({
  data,
  contentLink,
  inEditMode,
  size,
  className,
  AlertTitle,
  AlertDescription,
}: Props) => {
  const { factory } = getServerContext();
  return (
    <CmsEditable className={`flex items-start justify-end gap-2 px-28 py-4 relative bg-alert-palettealert-general rounded-lg overflow-hidden ${className}`}>
      <div className="flex items-center justify-end gap-[22px] relative flex-1 grow">
        <IconError className="!h-[26px] !w-[26px] !relative" />

        <div className="flex items-center flex-1 grow gap-1 relative">
          <div className="inline-flex flex-col items-start flex-[0_0_auto] gap-1 relative">
            <div className="relative w-fit mt-[-1.00px] font-h6-desktop font-[number:var(--h6-desktop-font-weight)] text-ui-palettetext-primary text-[length:var(--h6-desktop-font-size)] tracking-[var(--h6-desktop-letter-spacing)] leading-[var(--h6-desktop-line-height)] whitespace-nowrap [font-style:var(--h6-desktop-font-style)]">
              {AlertTitle}
            </div>
            <div className="relative w-fit font-p-small-desktop font-[number:var(--p-small-desktop-font-weight)] text-ui-palettetext-primary text-[length:var(--p-small-desktop-font-size)] tracking-[var(--p-small-desktop-letter-spacing)] leading-[var(--p-small-desktop-line-height)] whitespace-nowrap [font-style:var(--p-small-desktop-font-style)]">
              {AlertDescription}
            </div>
          </div>
        </div>
      </div>

        {/* TODO: Add close button */}
        {/* <button className="inline-flex items-center justify-center relative flex-[0_0_auto] bg-ui-palettebackground rounded-[42px] border border-solid border-[#130b2df5]">
            <div className="inline-flex items-center justify-center gap-1 px-3 py-2 relative flex-[0_0_auto]">
                <IconClose className="!h-[16px] !w-[16px] !relative" />
            </div>
        </button> */}
    </CmsEditable>
  );
};

export default AlertItem;
