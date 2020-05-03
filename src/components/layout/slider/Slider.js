import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import img1 from './sliderImages/slide1.jpg';
// import img2 from './sliderImages/slide2.jpg';
// import img3 from './sliderImages/slide3.jpg';
// import img4 from './sliderImages/slide4.jpg';
// import img5 from './sliderImages/slide5.jpg';

import img1 from './slider-banner/slide1.jpg';
import img2 from './slider-banner/slide2.jpg';
import img3 from './slider-banner/slide3.jpg';
import img4 from './slider-banner/slide4.jpg';
import img5 from './slider-banner/slide5.jpg';

import './slider.scss';

class Slider extends Component {

    getConfigurableProps = () => ({
        showArrows: true,
        showStatus: false,
        showIndicators: true,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: true,
        autoPlay: true,
        stopOnHover: false,
        swipeable: true,
        dynamicHeight: false,
        emulateTouch: true,
        thumbWidth: 100,
        selectedItem: 3,
        interval: 3000,
        transitionTime: 150,
        swipeScrollTolerance: 5,
        centerMode: true,
        // centerSlidePercentage:50
    });

    render() {
        return (
            <div className='header-wrapper'>
            {/*    <div className='header-right'>*/}
            {/*        <h1>jjjj</h1>*/}
            {/*        <h1>jjjj</h1>*/}
            {/*        <h1>jjjj</h1>*/}
            {/*        */}
            {/*</div>*/}
                <Carousel{...this.getConfigurableProps()} style={{ width: '1200px' }}>
                    <div>
                        <img className='carousel-img' src={img1} alt="zenith watch" />
                        <div className='legend-container'>
                            {/*<p className="legend">We selected </p>*/}
                        </div>
                    </div>
                    <div>
                        <img className='carousel-img' src={img2} alt="rolex watch" />
                        {/*<p className="legend">Legend 2</p>*/}
                    </div>
                    <div>
                        <img className='carousel-img' src={img3} alt="rolex watch" />
                        {/*<p className="legend">Legend 3</p>*/}
                    </div>
                    <div>
                        <img className='carousel-img' src={img4} alt="rolex watch" />
                        {/*<p className="legend">Legend 3</p>*/}
                    </div>
                    <div>
                        <img className='carousel-img' src={img5} alt="rolex watch" />
                        {/*<p className="legend">Legend 3</p>*/}
                    </div>
                </Carousel>
            {/*    <div className='header-left'>*/}
            {/*        <h1>jjjj</h1>*/}
            {/*        <h1>jjjj</h1>*/}
            {/*        <h1>jjjj</h1>*/}
            {/*        <h1>jjjj</h1>*/}

            {/*</div>*/}
            </div>

        );
    }
}


export default Slider
