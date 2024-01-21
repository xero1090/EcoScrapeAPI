import React from 'react';
import NewsList from './components/NewsList';
import Filter from './components/Filter';
import useArticles from './hooks/useArticles';
import useNewspapers from './hooks/useNewspapers';
import Title from './components/Title';

const App = () => {
  const [articles, setArticlesUrl] = useArticles('/news', []);
  const newspapersArray = useNewspapers('/news/newspaperssource');
  
  const handleFilterChange = (newspaperName) => {

    // Construct the URL based on the newspaper name. If no name is provided, revert to the base URL.
    const newUrl = newspaperName ? `/news/filtername/${newspaperName}` : '/news';
    setArticlesUrl(newUrl);

    // if (newspaperName === "") {
    //   setArticlesUrl('/news'); // Show all articles if no filter is selected
    // } else {
    //   setArticlesUrl(`/news/filtername/${newspaperName}`); // Fetch articles for a specific newspaper
    // }
  };

  // const handleFilterChange = (event) => {
  //   const newspaperName = event.target.value; // Get the selected value from the event object

  //   // Construct the URL based on the newspaper name. If no name is provided, revert to the base URL.
  //   const newUrl = newspaperName ? `/news/filtername/${newspaperName}` : '/news';
  //   setArticlesUrl(newUrl);
  // };

  return (
    <div className="container mt-4">
      {/* <h1 className="mb-3 text-center fw-bolder font-monospace ">EcoScrape News</h1> */}
      <Title title={"EcoScrape News"}></Title>
      <Filter newspapers={newspapersArray} onFilterChange={(e) => handleFilterChange(e.target.value)} />
      {/* <Filter newspapers={newspapersArray} onFilterChange={handleFilterChange} /> */}
      <NewsList articles={articles} />
    </div>
    
  );
};

export default App;

