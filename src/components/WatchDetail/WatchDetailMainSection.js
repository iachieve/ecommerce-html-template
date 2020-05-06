import React from 'react';
import Gallery from '../../components/layout/gallery/gallery';
import './watch-detail.scss';
import {Link} from "react-router-dom";

function WatchDetailMainSection({watch}) {

    return (
        <React.Fragment>
            {watch.images &&
            <div className='watch-detail-main-section'>
                <div className='watch-detail-main-section-gallery-container'>
                    <Gallery images={watch.images}/>
                </div>
                <div className='watch-detail-main-section-specs-container'>
                    <div className='watch-detail__title'>
                        <h1>{`${watch.brand} ${watch.model}`}</h1>
                        <h1>{`${watch.modelNo} ${watch.gender}'s watch`}</h1>
                    </div>
                    <div className='watch-detail__subtitle'>
                        <p className='watch-detail__subtitle-dark'>Item No. ${watch.itemNo}`</p>
                        <p className='watch-detail__subtitle-light'>{`Est. Retail: $${watch.priceBefore}`}</p>
                    </div>
                    <div className='watch-detail__price'>
                        <h1>{`$${watch.priceAfter}`}</h1>
                    </div>
                    <div className='watch-detail__warranty-buttons'>
                        <button className='btn btn-outline'>1 Year-$239</button>
                        <button  className='btn btn-outline'>2 Year-$339</button>
                        <button  className='btn btn-outline'>3 Year-$239</button>
                    </div>
                    <div className='watch-detail__add-to-cart'>
                        <button className='btn btn-secondary'>Add To My Cart</button>
                    </div>
                    <div className='watch-detail__social-media'>
                        <span className='watch-detail__social-media__title'>share</span>
                        <button className='btn btn-icon'>
                            <i className="fab fa-facebook-f facebook"> </i>
                        </button>
                        <button className='btn btn-icon'>
                            <i className="fab fa-twitter twitter"> </i>
                        </button>
                        <button className='btn btn-icon'>
                            <i className="fab fa-pinterest-p pinterest"> </i>
                        </button>
                        <button className='btn btn-icon'>
                            <i className="fas fa-envelope mail-envelop"> </i>
                        </button>
                    </div>
                    <div>
                        <span className='in-stock'>Only ${watch.stock} in stock</span><b> - Order today!</b>
                    </div>
                    <div className='watch-detail__short-desc'>
                        <p>
                            This pre-owned IWC Pilot Mark XVIII IW3270-01 watch is in excellent condition. During our quality control check, any necessary adjustments are made to ensure the watch is functioning as intended. The watch is Crown & Caliber Certified Authentic and comes backed by our 1-year warranty.
                        </p>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    );
};

export default WatchDetailMainSection;
