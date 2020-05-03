import React from 'react';

const Watch = ({watch}) => {
console.log(watch);

    return (
        <div className='watches-list__item'>
            <div className='overlay'>
                <a className='view-details-btn' href='#'>VIEW DETAILS</a>
            </div>
            <div className='watches-list__img-container'>
                <img src={watch.images[0]}
                     alt='whatever' className="watches-list__img"/>
            </div>
            <div className='watches-list__brand'>
                {watch.brand}
            </div>
            <div className='watches-list__model'>
                {watch.model}
            </div>
            <div className='watches-list__model-no'>
                {watch.modelNo}
            </div>
            <div className='watches-list__model-price'>
                <span className='watches-list__model-price--before'>${watch.priceBefore}</span>
                <span className='watches-list__model-price--after'>${watch.priceAfter}</span>
            </div>
        </div>

    );
};

export default Watch;