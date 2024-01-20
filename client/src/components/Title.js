import React from 'react';

const Title = ({ title }) => {
    return(
        <div className="row mb-3 mt-3 justify-content-center">
            <div className="col-auto">
                <h1 className="mb-3 text-center fw-bolder font-monospace shadow-lg">{title}</h1>
            </div>
        </div>

    );
};

export default Title;
    