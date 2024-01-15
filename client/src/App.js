import React from 'react';
import NewsList from './components/NewsList';
import Filter from './components/Filter';
import useArticles from './hooks/useArticles';
import useNewspapers from './hooks/useNewspapers';

const App = () => {
  const [articles, setArticlesUrl] = useArticles('/news', []);
  const newspapersArray = useNewspapers('/news/newspaperssource');
  
  const handleFilterChange = (newspaperName) => {
    if (newspaperName === "") {
      setArticlesUrl('/news'); // Show all articles if no filter is selected
    } else {
      setArticlesUrl(`/news/filtername/${newspaperName}`); // Fetch articles for a specific newspaper
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3 text-center">EcoScrape News</h1>
      <Filter newspapers={newspapersArray} onFilterChange={(e) => handleFilterChange(e.target.value)} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;

