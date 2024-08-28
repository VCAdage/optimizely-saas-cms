// SearchPage component
import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { SearchPageDataFragment, SearchPageDataFragmentDoc } from "@/gql/graphql";
import SearchContainer from '@/components/SearchContainer';
import { searchArticles } from "./api";

export const SearchPagePage: CmsComponent<SearchPageDataFragment> = ({ data, contentLink }) => {
  

  return (
    <div style={{padding: '20px'}}>
      <SearchContainer  doSearch={searchArticles}/>
    </div>
  );
};
SearchPagePage.getDataFragment = () => ['SearchPageData', SearchPageDataFragmentDoc]


export default SearchPagePage;