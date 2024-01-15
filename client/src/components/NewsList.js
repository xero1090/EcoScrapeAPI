import React from 'react';

const NewsList = ({ articles }) => {
  return (
    <div className="list-group">
      {articles.map((article, index) => (
        <a 
          key={index} 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{article.title}</h5>
            <small>Source: {article.source}</small>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsList;
