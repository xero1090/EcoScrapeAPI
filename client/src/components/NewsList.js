import React from 'react';
import formatSourceName from '../utils/formatSourceNames';

const NewsList = ({ articles }) => {
  return (
    <div className="list-group row-gap-3 rounded">
      {articles.map((article, index) => (
        <a 
          key={index} 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="list-group-item list-group-item-action flex-column align-items-start bg-secondary bg-opacity-25 rounded shadow"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{article.title}</h5>
            <small className="fw-bolder fst-italic">{formatSourceName(article.source)}</small>
          </div>
        </a>
      ))}
    </div>
    
  );
};

export default NewsList;


