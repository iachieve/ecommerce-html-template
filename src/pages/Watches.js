import React from 'react';
import Filter from "../components/Watches/Filter";
import WatchesList from "../components/Watches/WatchesListContainer";
import FilterContextProvider from "../components/Watches/FilterContext";
import DummyWatchesHeader from "../components/Watches/DummyWatchesHeader";
import DynamicWatchesHeader from "../components/Watches/DynamicWatchesHeader";

const Watches = (props) => {
    return (
        <FilterContextProvider>
            <div className='container watches-info-container'>
                <DummyWatchesHeader/>
                <DynamicWatchesHeader searchCriteria={props.match.params}/>
                <Filter/>
                <WatchesList/>
            </div>
        </FilterContextProvider>
    );
};

export default Watches;