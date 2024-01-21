// import React from 'react';
// import '../App.css';

// const Title = ({ title }) => {
//     return (
//         <div className="mb-3 mt-3">
//             <h1 className="text-center fw-bolder font-monospace text-custom-shadow">{title}</h1>
//         </div>
//     );
// };

// export default Title;


import React from 'react';
import '../App.css';

const Title = ({ title }) => {
    return (
        <div className="mb-3 mt-3 text-center">
            <h1 className="fw-bolder font-monospace text-custom-shadow">{title}</h1>
            <hr className="title-line" /> {/* This will create a horizontal line below the title */}
        </div>
    );
};

export default Title;
