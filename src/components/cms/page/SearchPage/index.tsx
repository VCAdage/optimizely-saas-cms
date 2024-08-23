
import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { SearchPageDataFragment, SearchPageDataFragmentDoc } from "@/gql/graphql";
import SearchBar from '@/components/SearchBar';
import { searchArticles } from "./api";

export const SearchPagePage: CmsComponent<SearchPageDataFragment> = ({ data, contentLink }) => {
  

  return (
    <div style={{padding: '20px'}}>
      <h1>Search Page</h1>
      <SearchBar  doSearch={searchArticles}/>
    </div>
  );
};
SearchPagePage.getDataFragment = () => ['SearchPageData', SearchPageDataFragmentDoc]


export default SearchPagePage;