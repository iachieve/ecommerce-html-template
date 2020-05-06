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
import {Link} from "react-router-dom";


function OurBrandsSection() {
    return (
        <section className='our-brands-section-wrapper'>
            <h1 className='section-title'>featured brands</h1>
            <div className='our-brands-section'>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/audemars piguet`}>
                        <img className='our-brands-section__img' src={audemarsPiguet} alt="audemars piguet"/>
                        <span className='our-brands-section__brand-title'>audemars piguet</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/cartier`}>
                        <img className='our-brands-section__img' src={cartier} alt="cartier"/>
                        <span className='our-brands-section__brand-title'>cartier</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/franck Muller`}>
                        <img className='our-brands-section__img' src={franckMuller} alt="franck Muller"/>
                        <span className='our-brands-section__brand-title'>franck Muller</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/iwc`}>
                        <img className='our-brands-section__img' src={iwc} alt="iwc"/>
                        <span className='our-brands-section__brand-title'>iwc</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/Jaeger-LeCoultre`}>
                        <img className='our-brands-section__img' src={jaegerLecoultre} alt="Jaeger-LeCoultre"/>
                        <span className='our-brands-section__brand-title'>jaeger Lecoultre</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/Maurice de Mauriac`}>
                        <img className='our-brands-section__img' src={mauriceLacroix} alt="Maurice de Mauriac"/>
                        <span className='our-brands-section__brand-title'>maurice Lacroix</span>

                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/Montblanc`}>
                        <img className='our-brands-section__img' src={montablanc} alt="Montblanc"/>
                        <span className='our-brands-section__brand-title'>montablanc</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/omega`}>
                        <img className='our-brands-section__img' src={omega} alt="omega"/>
                        <span className='our-brands-section__brand-title'>omega</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/patek Philippe`}>
                        <img className='our-brands-section__img' src={patekPhilippe} alt="patek Philippe"/>
                        <span className='our-brands-section__brand-title'>patek Philippe</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/rolex`}>
                        <img className='our-brands-section__img' src={rolex} alt="rolex"/>
                        <span className='our-brands-section__brand-title'>rolex</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/tudor`}>
                        <img className='our-brands-section__img' src={tudor} alt="tudor"/>
                        <span className='our-brands-section__brand-title'>tudor</span>
                    </Link>
                </div>
                <div className='our-brands-section__img-container'>
                    <Link to={`/watches/vacheron Constantin`}>
                        <img className='our-brands-section__img' src={vacheronConstantin} alt="vacheron Constantin"/>
                        <span className='our-brands-section__brand-title'>vacheron Constantin</span>

                    </Link>
                </div>

            </div>
        </section>
    )
}

export default OurBrandsSection
