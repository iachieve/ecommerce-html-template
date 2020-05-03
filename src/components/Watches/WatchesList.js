import React, {useContext} from 'react';
import {FilterContext} from './FilterContext';
import watchesData from './db/watches';
import Watch from "./Watch";

const WatchesList = () => {
    const {showFilter, toggleFilter} = useContext(FilterContext);

    return (
        <div className='watches-list-wrapper'>
            <button className='filter-toggle'
                onClick={() => toggleFilter()}>
                <i className="fas fa-sliders-h"></i>
                <span>FILTER OPTIONS</span>
            </button>
            <div className='pages-count-container'>
                <div className='pages-count-container__buttons'>
                    <button><i className="fas fa-angle-left"></i></button>
                    <button><i className="fas fa-angle-right"></i></button>
                </div>
               <div className='pages-count-container__text'>
                   61 - 63 of 63 results
               </div>
            </div>
            <div className="sorting-container">
                <div>
                    <span>Results per page</span>
                    <div className='select'>
                        <select >
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                            <option>60</option>
                        </select>
                    </div>

                </div>
                <div>
                    <span>Sorted by</span>
                    <div  className='select'>
                        <select>
                            <option>Alphabetically, A to Z</option>
                            <option>Alphabetically, A to Z</option>
                            <option>price low to high</option>
                            <option>price high to low</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className='watches-list'>

                {
                    watchesData.map(watch => <Watch watch={watch}/>)
                }

            </div>
        </div>
    );
};

export default WatchesList;