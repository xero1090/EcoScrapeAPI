import React from 'react';

const NewsArticle = ({ article }) => {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{article.title}</h5>
        <small>Source: {article.source}</small>
      </div>
    </a>
  );
};

export default NewsArticle;


// import React from 'react';
// import NewsArticle from './NewsArticle';

// const NewsList = ({ articles }) => {
//   return (
//     <div className="list-group">
//       {articles.map((article, index) => (
//         <NewsArticle key={index} article={article} />
//       ))}
//     </div>
//   );
// };

// export default NewsList;

