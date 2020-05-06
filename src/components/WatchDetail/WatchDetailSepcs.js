import React from "react";


const WatchDetailSpecs = ({watch}) => {

    return (
        <div className='watch-detail__specs'>
            <div className='watch-detail__specs__title-container'>
                <h2 className='watch-detail__specs__title'>{`${watch.brand} ${watch.model} ${watch.modelNo}`}</h2>
                <h3 className='watch-detail__specs__subtitle'>specification</h3>
            </div>
            <div className='watch-detail__specs-container'>


            <div className='watch-detail__specs__table'>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Brand:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.brand}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Model:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.model}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Model Number:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.modelNo}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Condition:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.condition}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Gender:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.gender}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Approximate Age:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.purchaseYear}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Movement:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.movement}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Case Size:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.caseSize}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Case Material:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.caseMaterial}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Lug Width:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.lugWidth}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Bracelet:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.bracelet}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Bezel:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.bezel}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Dial Color:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.dialColor}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Crystal:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.crystal}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Box:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.box}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Papers:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.papers}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Manual:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.manual}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Alternate Model Number:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.alternateModelNumber}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Case Back:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.caseBack}
                    </div>
                </div>
                <div className='watch-detail__specs__row'>
                    <div className='watch-detail__specs__cell'>
                        Case Thickness:
                    </div>
                    <div className='watch-detail__specs__cell'>
                        {watch.caseThickness}
                    </div>
                </div>
            </div>

            <div className='watch-detail__desc'>
                <div className='watch-detail__desc_p'>
                    <h2>PRE-OWNED WATCH DETAILS</h2>
                    <p>
                        This timepiece is in overall excellent pre-owned condition with moderate wear to the leather
                        strap. All photos are of the actual watch being sold. Powered by IWC’s Calibre 30110
                        self-winding mechanical movement which contains 21 jewels and has an approximate 42-hour power
                        reserve. Date display is located at the 3 o'clock position. Comes with IWC box, papers, and
                        manuals.
                    </p>
                </div>
                <div className='watch-detail__desc_p'>
                    <h4>C&C CERTIFIED PRE-OWNED WATCHES</h4>
                    <p>
                        Every watch listed on our site has been examined, performance-tested, and authenticated by our
                        in-house team of Swiss-trained watchmakers and technicians to receive the Crown & Caliber
                        Certified Pre-Owned status. Once listed, they are ready to ship in 1-2 business days and come
                        backed by our 1-year warranty and hassle-free return policy.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
};

export default WatchDetailSpecs;