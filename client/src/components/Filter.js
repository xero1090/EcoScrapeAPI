// import React from 'react';

// const Filter = ({ newspapers, onFilterChange }) => {
//     return (
//       <div className="mb-3 mt-3"> 
//         <select onChange={onFilterChange} className="form-select bg-secondary bg-opacity-50">
//           <option value="">All Newspapers</option>
//           {newspapers.map((newspaper, index) => (
//             <option key={index} value={newspaper.name}>
//               {newspaper.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
// };


// export default Filter;


// import React from 'react';
// import formatSourceName from '../utils/formatSourceNames';

// const Filter = ({ newspapers, onFilterChange }) => {
//     return (
//       <div className="row mb-3 mt-3">
//         <div className="col-auto">
//           <select onChange={onFilterChange} className="form-select bg-secondary bg-opacity-50 shadow-lg">
//             <option value="">All Newspapers</option>
//             {newspapers.map((newspaper, index) => (
//               <option key={index} value={newspaper.name}>
//                 {formatSourceName(newspaper.name)}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
// };

// export default Filter;


// import React from 'react';
// import formatSourceName from '../utils/formatSourceNames';

// const Filter = ({ newspapers, onFilterChange }) => {
//     return (
//       <div className="row mb-3 mt-3">
//         <div className="col-auto" style={{ width: 'auto' }}> {/* Adjust this width as necessary */}
//           <select onChange={onFilterChange} className="form-select bg-secondary bg-opacity-50 shadow-lg">
//             <option value="">All Newspapers</option>
//             {newspapers.map((newspaper, index) => (
//               <option key={index} value={newspaper.name}>
//                 {formatSourceName(newspaper.name)}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
// };

// export default Filter;



// import React, { useState } from 'react';
// import formatSourceName from '../utils/formatSourceNames';
// import { ChevronUp, ChevronDown } from 'react-bootstrap-icons'; // Make sure to install react-bootstrap-icons

// const Filter = ({ newspapers, onFilterChange }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className={`dropdown mb-3 mt-3 ${dropdownOpen ? 'show' : ''}`}>
//       <button
//         className="btn btn-secondary dropdown-toggle"
//         type="button"
//         id="dropdownMenuButton"
//         data-bs-toggle="dropdown"
//         aria-expanded={dropdownOpen}
//         onClick={toggleDropdown}
//       >
//         All Newspapers
//         {dropdownOpen ? <ChevronUp /> : <ChevronDown />}  
//       </button>
//       <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
//         <li><button className="dropdown-item" onClick={() => onFilterChange('')}>All Newspapers</button></li>
//         {newspapers.map((newspaper, index) => (
//           <li key={index}>
//             <button
//               className="dropdown-item"
//               onClick={() => onFilterChange(newspaper.name)}
//             >
//              {formatSourceName(newspaper.name)}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Filter;

import React, { useState } from 'react';
import formatSourceName from '../utils/formatSourceNames';
import '../App.css'

const Filter = ({ newspapers, onFilterChange }) => {
  // State to track if the dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    // Toggle the state
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="row mb-3 mt-3">
      <div className="col-auto" style={{ width: 'auto' }}>
        
          <select
            onChange={onFilterChange}
            className="form-select bg-primary-subtle bg-opacity-75 shadow-lg fw-semibold"
          >
            <option value="">All Newspapers</option>
            {newspapers.map((newspaper, index) => (
              <option key={index} value={newspaper.name}>
                {formatSourceName(newspaper.name)}
              </option>
            ))}
          </select>

      </div>
    </div>
  );
};

export default Filter;


