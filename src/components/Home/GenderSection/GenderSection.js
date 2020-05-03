import React from 'react'
import menImg from './gender-section-images/Men-watches.jpg';
import womenImg from './gender-section-images/Women-watches.jpg';
import './gender-section.scss';

function GenderSection() {
    return (
        <section className='gender-section-wrapper'>
            <h1 className='section-title'>carefully selected</h1>
            <div className='gender-section'>
                <div className='gender-section--women'>
                    <img src={womenImg} alt='Women watches section'/>
                    <div className='gender-section-text__women'>
                        <h2 className='gender-section__title'>Women's Watches</h2>
                        <ul>
                            <li>
                                <a href='#'>Diamonds Watches</a>
                            </li>
                            <li>
                                <a href='#'>White Watches</a>
                            </li>
                            <li>
                                <a href='#'>Silver Watches</a>
                            </li>
                            <li>
                                <a href='#'>Fashion Watches</a>
                            </li>
                            <li>
                                <a href='#'>Luxury Watches</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='gender-section--men'>
                    <img src={menImg} alt='Men watches section'/>
                    <div className='gender-section-text__men'>
                        <h2 className='gender-section__title'>Men's Watches</h2>
                        <ul>
                            <li>
                                <a href='#'>Automatic Watches</a>
                            </li>
                            <li>
                                <a href='#'>42mm Watches</a>
                            </li>
                            <li>
                                <a href='#'>Black Watches</a>
                            </li>
                            <li>
                                <a href='#'>Quartz Watches</a>
                            </li>
                            <li>
                                <a href='#'>Blue Watches</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderSection
