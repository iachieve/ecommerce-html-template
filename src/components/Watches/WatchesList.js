import React, {Component} from 'react';
import Watch from "./Watch";
import {v4 as uuidv4} from 'uuid';
import {FilterContext} from './FilterContext';

class WatchesList extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    static contextType = FilterContext;

    componentDidMount() {
        this.props.fetchAllWatches();
        this.setState({loading: false});
    }

    render() {
        const {toggleFilter} = this.context;
        if (this.state.loading) {
            return <h1>loading ...</h1>
        }
        let watchesData = this.props.watches;
        return (
            <div className='watches-list-wrapper'>
                <button className='filter-toggle'
                        onClick={() => toggleFilter()}>
                    <i className="fas fa-sliders-h"> </i>
                    <span>FILTER OPTIONS</span>
                </button>
                <div className='pages-count-container'>
                    <div className='pages-count-container__buttons'>
                        <button><i className="fas fa-angle-left"> </i></button>
                        <button><i className="fas fa-angle-right"> </i></button>
                    </div>
                    <div className='pages-count-container__text'>
                        61 - 63 of 63 results
                    </div>
                </div>
                <div className="sorting-container">
                    <div>
                        <span>Results per page</span>
                        <div className='select'>
                            <select>
                                <option>15</option>
                                <option>30</option>
                                <option>45</option>
                                <option>60</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <span>Sorted by</span>
                        <div className='select'>
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
                        watchesData && watchesData.map(watch => <Watch key={uuidv4()} watch={watch}/>)
                    }

                </div>
            </div>
        );
    }
};

export default WatchesList;