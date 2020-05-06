import React from 'react'
import './brandsHeader.scss';
import {Link} from "react-router-dom";
import rolex from "./images/01-rolex.png";
import omega from "./images/02-omega@2x.png";
import iwc from "./images/03-iwc-schaffhausen@2x.png";
import breitling from "./images/04-breitling@2x.png";
import hublot from "./images/05-hublot@2x.png";
import panerai from "./images/06-panerai@2x.png";
import tagHeuer from "./images/07-tag-heuer@2x.png";
import carter from "./images/08-carter@2x.png";
import zenith from "./images/09-zenith@2x.png";
import patekPhilippe from "./images/10-patek-philippe@2x.png";
import audemarsPiguet from "./images/11-audemars-piguet@2x.png";
import jaegerLecoultre from "./images/12-jaeger-lecoultre@2x.png";
import alangeAndSoehne from "./images/13-alange-and-soehne@2x.png";
import tudor from "./images/14-tudor@2x.png";
import longines from "./images/15-longines@2x.png";
import sinn from "./images/16-sinn@2x.png";
import chopard from "./images/17-chopard@2x.png";
import blancpain from "./images/18-blancpain@2x.png";
import franckMuller from "./images/19-franck-muller@2x.png";
import glashuette from "./images/20-glashuette@2x.png";
import bellAndRoss from "./images/21-bell-and-ross@2x.png";
import girardPerregaux from "./images/22-girard-perregaux@2x.png";
import mauriceLacroix from "./images/23-maurice-lacroix@2x.png";
import chronoswiss from "./images/24-chronoswiss@2x.png";

function BrandsHeader() {
    return (
        <React.Fragment>
            <h1 className='brands-header__title'>Top Watch Brands on Watches E-boutique</h1>
            <div className='brands-header-container'>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/Rolex`}>
                        <img className='brands-header-container__img' src={rolex} alt="rolex"/>
                        <div className='brands-header-container__title'>
                            <span>Rolex</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/omega`}>
                        <img className='brands-header-container__img' src={omega} alt="omega"/>
                        <div className='brands-header-container__title'>
                            <span>Omega</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/iwc`}>
                        <img className='brands-header-container__img' src={iwc} alt="iwc"/>
                        <div className='brands-header-container__title'>
                            <span>IWC</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>

                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/breitling`}>
                        <img className='brands-header-container__img' src={breitling} alt="breitling"/>
                        <div className='brands-header-container__title'>
                            <span>Breitling</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/hublot`}>
                        <img className='brands-header-container__img' src={hublot} alt="hublot"/>
                        <div className='brands-header-container__title'>
                            <span>Hublot</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/panerai`}>
                        <img className='brands-header-container__img' src={panerai} alt="panerai"/>
                        <div className='brands-header-container__title'>
                            <span>Panerai</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/tagHeuer`}>
                        <img className='brands-header-container__img' src={tagHeuer} alt="tagHeuer"/>
                        <div className='brands-header-container__title'>
                            <span>Tag Heuer</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/cartier`}>
                        <img className='brands-header-container__img' src={carter} alt="carter"/>
                        <div className='brands-header-container__title'>
                            <span>Cartier</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/zenith`}>
                        <img className='brands-header-container__img' src={zenith} alt="zenith"/>
                        <div className='brands-header-container__title'>
                            <span>Zenith</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/patekPhilippe`}>
                        <img className='brands-header-container__img' src={patekPhilippe} alt="patekPhilippe"/>
                        <div className='brands-header-container__title'>
                            <span>Patek Philippe</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/audemarsPiguet`}>
                        <img className='brands-header-container__img' src={audemarsPiguet} alt="audemarsPiguet"/>
                        <div className='brands-header-container__title'>
                            <span>Audemars Piguet</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/jaegerLecoultre`}>
                        <img className='brands-header-container__img' src={jaegerLecoultre} alt="jaegerLecoultre"/>
                        <div className='brands-header-container__title'>
                            <span>Jaeger Lecoultre</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/alangeAndSoehne`}>
                        <img className='brands-header-container__img' src={alangeAndSoehne} alt="alangeAndSoehne"/>
                        <div className='brands-header-container__title'>
                            <span>Alange And Soehne</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/tudor`}>
                        <img className='brands-header-container__img' src={tudor} alt="tudor"/>
                        <div className='brands-header-container__title'>
                            <span>Tudor</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/longines`}>
                        <img className='brands-header-container__img' src={longines} alt="longines"/>
                        <div className='brands-header-container__title'>
                            <span>Longines</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/sinn`}>
                        <img className='brands-header-container__img' src={sinn} alt="sinn"/>
                        <div className='brands-header-container__title'>
                            <span>Sinn</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/chopard`}>
                        <img className='brands-header-container__img' src={chopard} alt="chopard"/>
                        <div className='brands-header-container__title'>
                            <span>Chopard</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/blancpain`}>
                        <img className='brands-header-container__img' src={blancpain} alt="blancpain"/>
                        <div className='brands-header-container__title'>
                            <span>Blancpain</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/franckMuller`}>
                        <img className='brands-header-container__img' src={franckMuller} alt="franckMuller"/>
                        <div className='brands-header-container__title'>
                            <span>Franck Muller</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/glashuette`}>
                        <img className='brands-header-container__img' src={glashuette} alt="glashuette"/>
                        <div className='brands-header-container__title'>
                            <span>Glashuette</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/bellAndRoss`}>
                        <img className='brands-header-container__img' src={bellAndRoss} alt="bellAndRoss"/>
                        <div className='brands-header-container__title'>
                            <span>Bell And Ross</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/Girard Perregaux`}>
                        <img className='brands-header-container__img' src={girardPerregaux} alt="girardPerregaux"/>
                        <div className='brands-header-container__title'>
                            <span>Girard Perregaux</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/Maurice de Mauriac`}>
                        <img className='brands-header-container__img' src={mauriceLacroix} alt="mauriceLacroix"/>
                        <div className='brands-header-container__title'>
                            <span>Maurice de Mauriac</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

                <div className='brands-header-container__section'>
                    <Link to={`/watches/chronoswiss`}>
                        <img className='brands-header-container__img' src={chronoswiss} alt="chronoswiss"/>
                        <div className='brands-header-container__title'>
                            <span>CHRONOSWISS</span>
                            <i className="fas fa-link brands-header-container__link-icon"> </i>
                        </div>
                    </Link>
                </div>

            </div>
        </React.Fragment>
    )
}

export default BrandsHeader
