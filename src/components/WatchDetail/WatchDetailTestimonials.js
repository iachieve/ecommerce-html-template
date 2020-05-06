import React from "react";
import {Carousel} from "react-responsive-carousel";
import StarRatingComponent from 'react-star-rating-component';
const { v4: uuidv4 } = require('uuid');
function rateText(n){
    n = parseInt(n);
    switch (n) {
        case 1:
            return 'Bad';
        case 2:
            return 'Fairly Bad';
        case 3:
            return 'Okay';
        case 4:
            return 'V. Good';
        case 5:
            return 'Excellent';
        default:
            return '';
    }
}

const WatchDetailTestimonials = ({watch}) => {
    console.log(watch.reviews);
    return (
        <div className='watch-detail__testimonials'>
            {watch.reviews && (
                <Carousel autoPlay={true}>
                    {watch.reviews.map(review =>
                        (<React.Fragment  key={uuidv4()} >
                            <div style={{padding: 20, marginBottom:20}}>
                                <div className='testimonial-rate'>
                                    <StarRatingComponent
                                    value={review.rate}
                                    />

                                    <h1>{review.rate}/5</h1>
                                    <span>{rateText(review.rate)}</span>
                                </div>
                                <div>
                                    <p className='testimonial-body'>
                                        {review.body}
                                    </p>
                                    <h4>
                                        -{review.username}
                                    </h4>
                                </div>
                            </div>
                        </React.Fragment>)
                    )}
                </Carousel>
            )}
        </div>
    )
};

export default WatchDetailTestimonials;