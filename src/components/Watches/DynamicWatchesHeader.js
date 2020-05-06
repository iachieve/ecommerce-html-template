import React from "react";

const DynamicWatchesHeader = ({searchCriteria}) =>{
    console.log('searchCriteria', searchCriteria)
    return (
        <React.Fragment>
            {searchCriteria && searchCriteria.brandId &&
            <div className='dynamic-watches-header'>
                <h1>{searchCriteria.brandId} Brand</h1>
            </div>}
        </React.Fragment>

    )
};

export default  DynamicWatchesHeader;