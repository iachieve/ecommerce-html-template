import React from 'react'
import './category-section.scss';
import imgSell from './section-category-images/sell.jpg';
import imgShop from './section-category-images/shop.jpg';
import imgVintage from './section-category-images/vintage.jpg';


function CategorySections() {
  return (
    <section className='category-section-wrapper'>
      <h1 className='section-title'>our services</h1>
      <div className='category-section'>
        <div className= "category-section__img-container img-hover-zoom ">
          <a href='#'>

            <img alt="shop vintage wages" className="category-section__img" src={imgVintage} />

          </a>
        </div>
        <div className= "category-section__img-container img-hover-zoom ">
          <a href='#'>

            <img alt="sell" className="category-section__img" src={imgSell} />

          </a>
        </div>
        <div className= "category-section__img-container img-hover-zoom ">
          <a href='#'>

            <img alt="shop watches" className="category-section__img" src={imgShop} />

          </a>
        </div>
      </div>
    </section>
  )
}

export default CategorySections
