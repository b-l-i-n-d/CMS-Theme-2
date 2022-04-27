import React from 'react';
import BackgroundImage from '../../../assets/img/hero-img.jpg';
import HeroSectionStyles from './defHeroSection.module.css';

function DefHeroSection() {
    return (
        <section
            id="hero"
            className={`${HeroSectionStyles.hero} vh-100 img-container`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="container-xl d-flex flex-wrap mx-auto h-100">
                <div className="col-sm-9 col-md-8 col-lg-7 d-flex flex-column justify-content-center gap-5">
                    <div className={`${HeroSectionStyles.title} display-4`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                        <span className="text-highlight"> deleniti.</span>
                    </div>
                    <div className="subtitle h5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias mollitia
                        impedit voluptatem modi atque dicta non eius aliquam quae deserunt.
                    </div>
                    <div className="d-inline-flex align-items-center gap-3 gap-md-4 gap-lg-5">
                        <button
                            className="btn btn-dark dark-box-shadow rounded-3 border border-2 border-dark text-capitalize"
                            type="button"
                        >
                            Lorem.
                        </button>
                        <a
                            href="##"
                            className="btn btn-outline-dark dark-box-shadow rounded-3"
                            type="button"
                        >
                            <i className="bx bx-play-circle bx-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DefHeroSection;
