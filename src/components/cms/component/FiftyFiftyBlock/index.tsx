import PropTypes from "prop-types";
import React from "react";
import ButtonBlock from '@/components/component/block/button_block';
import { type ButtonBlockPropertyDataFragment, type ButtonBlockDataFragment } from "@/gql/graphql";
import Image from '@/components/shared/cms_image'
import { CmsEditable, CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";

interface Props {
  orientation: "image-left-4-3" | "image-right-16-9" | "image-left-16-9" | "image-right-4-3";
  size: "xl";
  mode: "dark";
  state: "default";
  mediaTypeImageSizeXlClassName: any;
}

export const ElementBlock = ({ orientation, size, mode, state, mediaTypeImageSizeXlClassName }: Props): JSX.Element => {
  return (
    <div className="w-[2200px] flex flex-col items-start gap-[62px] px-[120px] py-16 bg-adage-paletteadage-black relative">
      <div className="w-full flex self-stretch items-center gap-8 flex-[0_0_auto] relative">
        {["image-left-16-9", "image-left-4-3"].includes(orientation) && (
          <CmsEditable
            as={Image}
            cmsFieldName="FiftyFiftyImage"
            className="!relative rounded-[5px]"
            src={ image }
            alt={""}
            width={660}
            height={440}
          />
        )}

        <div
          className={`flex flex-col items-start gap-8 relative ${
            orientation === "image-left-16-9" ? "w-[528px]" : orientation === "image-right-16-9" ? "w-[798px]" : ""
          } ${["image-left-4-3", "image-right-4-3"].includes(orientation) ? "grow" : ""} ${
            ["image-left-4-3", "image-right-4-3"].includes(orientation) ? "flex-1" : ""
          }`}
        >
          <div
            className={`inline-flex flex-col items-start gap-2 flex-[0_0_auto] relative ${
              orientation === "image-left-16-9" ? "mr-[-270.00px]" : ""
            }`}
          >
            <div className="font-p-small-desktop-bold w-fit mt-[-1.00px] tracking-[var(--p-small-desktop-bold-letter-spacing)] text-[length:var(--p-small-desktop-bold-font-size)] [font-style:var(--p-small-desktop-bold-font-style)] text-ui-palettebackground font-[number:var(--p-small-desktop-bold-font-weight)] leading-[var(--p-small-desktop-bold-line-height)] whitespace-nowrap relative">
              {"{"}Optional Sub-Title{"}"}
            </div>
            <div className="inline-flex flex-col items-start gap-4 flex-[0_0_auto] relative">
              <div
                className={`font-h2-desktop mt-[-1.00px] tracking-[var(--h2-desktop-letter-spacing)] text-[length:var(--h2-desktop-font-size)] [font-style:var(--h2-desktop-font-style)] text-ui-palettebackground font-[number:var(--h2-desktop-font-weight)] leading-[var(--h2-desktop-line-height)] relative ${
                  ["image-left-4-3", "image-right-4-3"].includes(orientation) ? "w-[964px]" : "w-[798px]"
                }`}
              >
                {"{"}Required Title{"}"}
              </div>
              <div
                className={`font-p-desktop tracking-[var(--p-desktop-letter-spacing)] [font-style:var(--p-desktop-font-style)] text-[length:var(--p-desktop-font-size)] text-ui-palettebackground font-[number:var(--p-desktop-font-weight)] leading-[var(--p-desktop-line-height)] relative ${
                  ["image-left-4-3", "image-right-4-3"].includes(orientation) ? "w-[964px]" : "w-[798px]"
                }`}
              >
                {"{"}Optional description{"}"}
              </div>
            </div>
          </div>
          <div className="inline-flex items-start gap-3 flex-[0_0_auto] relative">
            <Button className="!flex-[0_0_auto]" mode="light" size="l" state="default" type="primary" />
          </div>
        </div>
        {["image-right-16-9", "image-right-4-3"].includes(orientation) && (
          <Media
            className={mediaTypeImageSizeXlClassName}
            size="xl"
            type="image"
            width={
              orientation === "image-right-4-3"
                ? "four-thousand-three-hundred-and-fifty"
                : "sixteen-thousand-nine-hundred-and-fifty"
            }
          />
        )}
      </div>
    </div>
  );
};

ElementBlock.propTypes = {
  orientation: PropTypes.oneOf(["image-left-4-3", "image-right-16-9", "image-left-16-9", "image-right-4-3"]),
  size: PropTypes.oneOf(["xl"]),
  mode: PropTypes.oneOf(["dark"]),
  state: PropTypes.oneOf(["default"]),
};