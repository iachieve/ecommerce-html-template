import React from 'react'
import '../../../scss/slider.scss'
import img1 from './sliderImages/slide1.jpg';
import img2 from './sliderImages/slide2.jpg';
import img3 from './sliderImages/slide3.jpg';
import img4 from './sliderImages/slide4.jpg';
import img5 from './sliderImages/slide5.jpg';

function Slider() {
  return (
    <div className="container">
      <div className="carousel">
        <input type="radio" id="carousel-1" name="carousel[]" defaultChecked />
        <input type="radio" id="carousel-2" name="carousel[]" />
        <input type="radio" id="carousel-3" name="carousel[]" />
        <input type="radio" id="carousel-4" name="carousel[]" />
        <input type="radio" id="carousel-5" name="carousel[]" />
        <ul className="carousel__items">
          <li className="carousel__item">
            <img src={img1} alt="zenith watch" />
          </li>
          <li className="carousel__item">
            <img src={img2} alt="rolex watch" />
          </li>
          <li className="carousel__item">
            <img src={img3} alt="rolex watch" />
          </li>
          <li className="carousel__item">
            <img src={img4} alt="tudor watch" />
          </li>
          <li className="carousel__item">
            <img src={img5} alt="rolex watch" />
          </li>
        </ul>
        <div className="carousel__prev">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
          <label htmlFor="carousel-5"></label>
        </div>
        <div className="carousel__next">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
          <label htmlFor="carousel-5"></label>
        </div>
        <div className="carousel__nav">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
          <label htmlFor="carousel-5"></label>
        </div>
      </div>
    </div>
  )
}

export default Slider
