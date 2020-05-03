import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

const FilterContextProvider = props => {
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    };

    return <FilterContext.Provider value={{ showFilter, toggleFilter}}>
        {props.children}
    </FilterContext.Provider>
};

export default FilterContextProvider;