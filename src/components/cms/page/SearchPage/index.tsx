
import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { SearchPageDataFragment } from "@/gql/graphql";
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

export default SearchPagePage;