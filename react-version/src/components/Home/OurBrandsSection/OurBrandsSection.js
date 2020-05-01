import React from 'react';
import './our-brands-section.scss';
import audemarsPiguet from './OurBrandsSection-images/audemars-piguet.jpg';
import cartier from './OurBrandsSection-images/cartier.jpg';
import franckMuller from './OurBrandsSection-images/franck-muller.jpg';
import iwc from './OurBrandsSection-images/iwc.jpg';
import jaegerLecoultre from './OurBrandsSection-images/jaeger-lecoultre.jpg';
import mauriceLacroix from './OurBrandsSection-images/maurice-lacroix.jpg';
import montablanc from './OurBrandsSection-images/montablanc.jpg';
import omega from './OurBrandsSection-images/omega.jpg';
import patekPhilippe from './OurBrandsSection-images/patek-philippe.jpg';
import rolex from './OurBrandsSection-images/rolex.jpg';
import tudor from './OurBrandsSection-images/tudor.jpg';
import vacheronConstantin from './OurBrandsSection-images/vacheron-constantin.jpg';


function OurBrandsSection() {
  return (
    <section className='our-brands-section-wrapper'>
      <h1 className='section-title'>featured brands</h1>

      <div className='our-brands-section'>

        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={audemarsPiguet} alt="audemars piguet watch" />
            <span className='our-brands-section__brand-title'>audemars piguet</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={cartier} alt="" />
            <span className='our-brands-section__brand-title'>cartier</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={franckMuller} alt="franck Muller" />
            <span className='our-brands-section__brand-title'>franck Muller</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={iwc} alt="iwc" />
            <span className='our-brands-section__brand-title'>iwc</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={jaegerLecoultre} alt="jaeger Lecoultre" />
            <span className='our-brands-section__brand-title'>jaeger Lecoultre</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={mauriceLacroix} alt="maurice Lacroix" />
            <span className='our-brands-section__brand-title'>maurice Lacroix</span>

          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={montablanc} alt="montablanc" />
            <span className='our-brands-section__brand-title'>montablanc</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={omega} alt="omega" />
            <span className='our-brands-section__brand-title'>omega</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={patekPhilippe} alt="patek Philippe" />
            <span className='our-brands-section__brand-title'>patek Philippe</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={rolex} alt="rolex" />
            <span className='our-brands-section__brand-title'>rolex</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={tudor} alt="" />
            <span className='our-brands-section__brand-title'>tudor</span>
          </a>
        </div>
        <div className='our-brands-section__img-container'>
          <a href="#">
            <img className='our-brands-section__img' src={vacheronConstantin} alt="vacheron Constantin" />
            <span className='our-brands-section__brand-title'>vacheron Constantin</span>

          </a>
        </div>

      </div>
    </section>
  )
}

export default OurBrandsSection
