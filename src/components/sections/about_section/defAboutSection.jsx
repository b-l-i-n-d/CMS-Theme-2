import React from 'react';
import AboutImage from '../../../assets/img/about.jpg';

function DefAboutSection() {
    return (
        <section id="about" className="about py-5">
            <div className="container-xl d-flex gap-3 gap-lg-0 flex-wrap-reverse justify-content-between py-5">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center gap-3 pe-lg-3">
                    <div className="heading">
                        <div className="title h3">Lorem, ipsum.</div>
                        <div className="subtitle display-4">Lorem ipsum dolor sit amet.</div>
                        <div className="summary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                            necessitatibus.
                        </div>
                    </div>

                    <div clasName="h4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, corrupti
                        sequi. Maiores facilis eos ut id est nemo aliquid cupiditate.
                    </div>
                </div>
                <div
                    className="col-12 col-lg-6 img-container"
                    style={{ backgroundImage: `url(${AboutImage})` }}
                />
            </div>
        </section>
    );
}

export default DefAboutSection;
