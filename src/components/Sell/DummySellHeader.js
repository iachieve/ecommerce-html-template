import React from "react";
import './sell.scss';

const DummySellHeader = (props) =>{

    return(
        <div className='dummy-sell-header'>
            <div className='dummy-sell-header__hero'>
                <h1>Sell on Watches E-boutique</h1>
                <h3>and reach 9 million potential buyers every month!</h3>
            </div>
            <div className='dummy-sell-header-sep'>


                    <p><i className="far fa-check-square"></i> Low commission fee</p>



                    <p><i className="far fa-check-square"></i>90% sales rate</p>


                    <p><i className="far fa-check-square"></i>Free escrow service</p>

            </div>
        </div>
    )
};

export  default DummySellHeader;