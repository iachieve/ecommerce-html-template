import React from "react";
import DummySellHeader from "../components/Sell/DummySellHeader";
import SellForm from "../components/Sell/SellForm";
const Sell = (props) =>{

    return(
        <div className='container'>
            <DummySellHeader/>
            <SellForm/>
        </div>
    )
};

export  default Sell;