// import React from 'react';
// import formatSourceName from '../utils/formatSourceNames';

// const NewsList = ({ articles }) => {
//   return (
//     <div className="list-group row-gap-3 rounded">
//       {articles.map((article, index) => (
//         <a 
//           key={index} 
//           href={article.url} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="list-group-item list-group-item-action flex-column align-items-start bg-primary-subtle bg-opacity-25 rounded shadow-sm"
//         >
//           <div className="d-flex w-100 justify-content-between">
//             <h1 className="mb-1 fw-bold fs-5">{article.title}</h1>
//           </div>
//           <div className="d-flex w-100 justify-content-between">
//             <small className="fw-bolder fst-italic">{formatSourceName(article.source)}</small>
//           </div>
          
//         </a>
//       ))}
//     </div>
    
//   );
// };

// export default NewsList;


// import React from 'react';
// import formatSourceName from '../utils/formatSourceNames';

// const NewsList = ({ articles }) => {
//   return (
//     <div className="list-group row-gap-3 rounded">
//       {articles.map((article, index) => (
//         <a 
//           key={index} 
//           href={article.url} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="list-group-item list-group-item-action flex-column align-items-start bg-primary-subtle bg-opacity-25 rounded shadow-sm"
//         >
//           <div className="d-flex w-100 justify-content-between">
//             <h5 className="mb-1 fw-bold">{article.title}</h5> {/* Change h1 to h5 or another suitable size */}
//           </div>
//           <hr className="my-2" /> {/* This is the divider */}
//           <div className="d-flex w-100 justify-content-between">
//             <small className="text-muted">{formatSourceName(article.source)}</small>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default NewsList;


import React from 'react';
import formatSourceName from '../utils/formatSourceNames';

const NewsList = ({ articles }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="list-group w-auto" style={{ maxWidth: '600px' }}> {/* Adjust max-width as needed */}
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="list-group-item list-group-item-action flex-column align-items-start bg-primary-subtle bg-opacity-25 rounded shadow-sm mb-2"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 fw-bold">{article.title}</h5>
            </div>
            <hr className="my-1" /> {/* Reduced margin around the <hr> */}
            <div className="d-flex w-100 justify-content-between">
              <small className="text-muted fw-bolder fst-italic">{formatSourceName(article.source)}</small>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
