// components/SearchBar.tsx
'use client';
import React, {use, useEffect} from 'react';
import { searchArticles } from '../cms/page/SearchPage/api';
import { ArticleList, ArticleListItem } from '../cms/page/ArticleGroupPage/api';
import { getSummary } from '@/openaiQuery';
import { ContentUrl } from '@/gql/graphql';

interface SearchBarProps {
  doSearch: (searchTerm: string) => Promise<ArticleList>;
}



const SearchContainer: React.FC<SearchBarProps> = ({ doSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null as ArticleListItem[] | null);
  const [summary, setSummary] = React.useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const hasResults = searchResults && searchResults.length > 0;

  const handleSearch = () => {
    var results = doSearch(searchTerm).then((results) => {
    setSearchResults(results.items);
  })};

  useEffect(() => {
    handleSearch();
  },
  []);

  useEffect(() => {
    if (!hasResults) {
      setSummary('');
      return;
    }
    var topResults = searchResults.slice(0, 5);
    getSummary(topResults.map((result) => result.body?.toString() as string)).then((summary) => {
      setSummary(summary);
    });
  },
  [searchResults]);

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl mb-10'>Search Page</h1>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      {hasResults && !summary && 
        <div className='mt-10 mb-10'>
          <p>Generating AI Summary</p>
          <div className="animate-spin inline-block size-12 border-[6px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
          </div>
        </div>}
        
      {summary && <div className='mt-10 mb-10' dangerouslySetInnerHTML={{__html: summary}} />}
      <ul>
        {hasResults && searchResults.map((result) => (
          <li className='rounded-lg shadow-md mb-10 p-10 ' key={result.key} style={{backgroundColor: 'rgb(238 240 245)'}}>
            <h2 style={{fontSize:'24px', fontWeight: '700'}}><a href={result.link?.default ?? ''} >{result.title}</a></h2>
            <div className='flex space-x-2'>
              {result && result.image && <img className='max-w-96 flex-none' src={(result.image.url as ContentUrl).default ?? ''} />}
              <div className='flex-1 flex flex-col'>
              {result && result.intro && <div className='flex-1' dangerouslySetInnerHTML={{__html: result.intro.toString()}} /> || <div className='flex-1'>No summary</div>} 
              {result && result.published && <p><strong>Published:</strong> {result.published.toString()}</p>}
              </div>
              
            </div>
            
          </li>
        )) || <li>No results to show</li>}
      </ul>
    </div>
  );
};

export default SearchContainer;
