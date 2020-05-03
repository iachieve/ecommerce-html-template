import React, {useContext} from 'react';
import './watches.scss';
import {FilterContext} from './FilterContext';

const Filter = () => {
    const {showFilter, setShowFilter} = useContext(FilterContext);

    return (
        <div className={showFilter? 'filter show-filter': 'filter'}>
            <div className='filter__sub-section'>
                <h4 className='filter__subsection-title'>Top Brands</h4>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>Rolex</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>OMEGA</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>TAG Heuer</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
            </div>

            <div className='filter__sub-section'>
                <h4 className='filter__subsection-title'>Brands</h4>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>A. Lange & Sohne</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>Audemars Piguet</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>Breguet</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
            </div>

            <div className='filter__sub-section'>
                <h4 className='filter__subsection-title'>Model Name</h4>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>Fastrider</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>Glamour Date</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>Chopard</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
            </div>
            <div className='filter__sub-section'>
                <h4 className='filter__subsection-title'>price</h4>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>$1000 to $2000</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>$1000 to $2000</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
                <div className='filter-item'>
                    <div className='filter__subsection-input'>
                        <input type='checkbox'/> <span>$1000 to $2000</span>
                    </div>
                    <div className='filter__subsection-count'>
                        (498)
                    </div>
                </div>
            </div>




        </div>





    );
};

export default Filter;