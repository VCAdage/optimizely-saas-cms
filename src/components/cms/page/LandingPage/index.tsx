import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  LandingPageDataFragmentDoc,
  type LandingPageDataFragment,
} from "@/gql/graphql";
import {
  CmsEditable,
  getServerContext,
} from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsImage } from "@/components/shared/cms_image";
import { getSdk } from "@/sdk";
export const LandingPagePage: CmsComponent<LandingPageDataFragment> = async ({
  data,
  contentLink,
}) => {
  //return for now just hello world text

  console.log(data);

  const { factory } = getServerContext();
  return (
    <div>
      <CmsImage
        src={data.articleHeroImage}
        alt="hero-image"
        aria-hidden
        priority
        fill
        className="object-cover"
      />
      <CmsEditable as="h1" cmsFieldName="articleTitle">
        {data.articleTitle}
      </CmsEditable>
      <CmsEditable
        as={RichText}
        cmsFieldName="articleBody"
        text={data.articleBody?.json}
        factory={factory}
      />
    </div>
  );
};

LandingPagePage.getDataFragment = () => [
  "LandingPageData",
  LandingPageDataFragmentDoc,
];

LandingPagePage.getMetaData = async (contentLink) => {
  const sdk = getSdk();
  const response = await sdk.getArticlePageMetaData(contentLink);
  const experienceData = (response?.BlankExperience?.items || [])[0];
  const title =
    experienceData?.SeoSettings?.metaTitle ??
    experienceData?._metadata?.displayName ??
    "Unnamed blank experience";
  return {
    title: title,
  };
};

export default LandingPagePage;
