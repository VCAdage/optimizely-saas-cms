import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  LandingPageDataFragmentDoc,
  type LandingPageDataFragment,
} from "@/gql/graphql";

export const LandingPagePage: CmsComponent<
  LandingPageDataFragment
> = async ({}) => {
  //return for now just hello world text
  return <div>Hello World</div>;
};

export default LandingPagePage;

LandingPagePage.getDataFragment = () => [
  "LandingPageData",
  LandingPageDataFragmentDoc,
];
