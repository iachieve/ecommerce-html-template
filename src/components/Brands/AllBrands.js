import React from 'react'
import AlpabetSorter from 'react-alphabet-sorter'
import allBrands from "./db/brands";
import './brands.scss';
import { withRouter } from 'react-router-dom';

function AllBrands(props) {
    const handleSorter = (selected) => {
        props.history.push(`/watches/${selected[0].label}`);
    };

    return (
        <React.Fragment>
                <h2>Watch Brands and Manufacturers</h2>
                <AlpabetSorter
                    asGroup={allBrands}
                    asName='usage_example'
                    type='radio'
                    chunkByLetter={true}
                    handleCheck={handleSorter}/>
        </React.Fragment>
    )
}

export default withRouter(AllBrands);
