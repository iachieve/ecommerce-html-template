import React from 'react';
import {Link} from "react-router-dom";

const WatchDetailGuide = ({watch})=>{
    return(

        <div className='watch-detail-guide'>
            <div className='watch-detail-guide-section'>
                <h2>
                    <i className="fas fa-truck guide-icon"> </i>
                    Free Shipping & Returns
                </h2>
                <p>
                    Ready to ship within 1-2 business days after order is processed and approved.  All watch shipments are fully insured and require a signature upon arrival.  Please make arrangements accordingly.
                </p>
                <h3>
                    <Link className='link' to='/'>Read full shipping details here</Link>
                </h3>
            </div>

            <div className='watch-detail-guide-section'>
                <h2>
                    <i className="fas fa-certificate guide-icon"> </i>
                    1-Year Warranty
                </h2>
                <p>
                    Watches E-boutique offers a 1-year limited warranty for this timepiece, which covers repair or replacement of the watch or its parts.                             </p>
                <h3>
                    <Link className='link' to='/'>Read full warranty details here</Link>
                </h3>
            </div>

        </div>
    );
};

export default WatchDetailGuide;