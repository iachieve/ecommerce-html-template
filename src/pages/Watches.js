import React, {Component} from 'react';
import Filter from "../components/Watches/Filter";
import WatchesList from "../components/Watches/WatchesList";
import FilterContextProvider from "../components/Watches/FilterContext";

class Watches extends Component {
    render() {
        return (
            <FilterContextProvider>
                <div className={'container'}>
                    <Filter/>
                    <WatchesList/>
                </div>
            </FilterContextProvider>
        );
    }
}

export default Watches;