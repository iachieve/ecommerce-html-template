import React from 'react'
import BrandsHeader from "../components/Brands/BrandsHeader";
import AllBrands from "../components/Brands/AllBrands";

function Brands() {
    return (
       <div className='container brands-container'>
            <BrandsHeader/>
            <AllBrands/>
       </div>
    )
}

export default Brands
