import React, {Component} from 'react';
import Filter from "../components/Watches/Filter";
import WatchesList from "../components/Watches/WatchesListContainer";

import FilterContextProvider from "../components/Watches/FilterContext";
import DummyWatchesHeader from "../components/Watches/DummyWatchesHeader";

class Watches extends Component {
    render() {
        return (
            <FilterContextProvider>
                <div className='container watches-info-container'>
                    <DummyWatchesHeader/>
                    <Filter/>
                    <WatchesList/>
                </div>
            </FilterContextProvider>
        );
    }
}

export default Watches;