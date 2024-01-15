import React from 'react';

// const Filter = ({ newspapers, onFilterChange }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor="newspaperSelect">Filter by Newspaper</label>
//       <select id="newspaperSelect" className="form-control" onChange={onFilterChange}>
//         <option value="">All Newspapers</option>
//         {newspapers.map((newspaper, index) => (
//           <option key={index} value={newspaper.name}>
//             {newspaper.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

const Filter = ({ newspapers, onFilterChange }) => {
    return (
      <select onChange={onFilterChange} className="form-select">
        <option value="">All Newspapers</option>
        {newspapers.map((newspaper, index) => (
          <option key={index} value={newspaper.name}>
            {newspaper.name}
          </option>
        ))}
      </select>
    );
  };

export default Filter;
