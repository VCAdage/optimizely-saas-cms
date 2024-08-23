// components/SearchBar.tsx
'use client';
import React, {useEffect} from 'react';
import { searchArticles } from '../cms/page/SearchPage/api';
import { ArticleList, ArticleListItem } from '../cms/page/ArticleGroupPage/api';
import { getSummary } from '@/openaiQuery';

interface SearchBarProps {
  doSearch: (searchTerm: string) => Promise<ArticleList>;
}



const SearchBar: React.FC<SearchBarProps> = ({ doSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null as ArticleListItem[] | null);
  const [summary, setSummary] = React.useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    var results = doSearch(searchTerm).then((results) => {
    setSearchResults(results.items);
  })};

  useEffect(() => {
    if (!searchResults) return;
    var topResults = searchResults.slice(0, 5);
    getSummary(topResults.map((result) => result.intro?.toString() as string)).then((summary) => {
      setSummary(summary);
    });
  },
  [searchResults]);

  return (
    <div style={{maxWidth: '700px'}}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      {summary && <div dangerouslySetInnerHTML={{__html: summary}} />}
      <ul>
        {searchResults && searchResults.map((result) => (
          <li key={result.key} style={{border: '1px solid black', marginBottom: '10px', padding: '10px'}}>
            <h2 style={{fontSize:'24px', fontWeight: '700'}}>{result.title}</h2>
            <div dangerouslySetInnerHTML={{__html: result.intro}} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
