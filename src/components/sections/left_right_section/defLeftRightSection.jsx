import React from 'react';
import { Col, Container } from 'react-bootstrap';
import RightImg from '../../../assets/img/left-right/immo-wegmann-pAvpc7XsFdY-unsplash.jpg';
import LeftImg from '../../../assets/img/left-right/immo-wegmann-Z1iO_gOa0v8-unsplash.jpg';
import LeftRightStyle from './defLeftRightSection.module.css';

function DefLeftRightSection() {
    return (
        <section id="leftRight" className={`${LeftRightStyle.leftRight}`}>
            <Container
                fluid="xl"
                className="d-flex gap-3 gap-lg-0 flex-wrap justify-content-between py-5"
            >
                <Col
                    lg={6}
                    xs={12}
                    className="imgContainer"
                    style={{
                        backgroundImage: `url(${LeftImg})`,
                    }}
                />
                <Col lg={6} className="d-flex flex-column justify-content-center gap-3 ps-lg-3">
                    <div className="h4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, corrupti
                        sequi. Maiores facilis eos ut id est nemo aliquid cupiditate.
                    </div>
                </Col>
            </Container>

            <Container
                fluid="xl"
                className="d-flex gap-3 gap-lg-0 flex-wrap-reverse justify-content-between py-5"
            >
                <Col lg={6} className="d-flex flex-column justify-content-center gap-3 pe-lg-3">
                    <div className="h4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, corrupti
                        sequi. Maiores facilis eos ut id est nemo aliquid cupiditate.
                    </div>
                </Col>
                <Col
                    lg={6}
                    xs={12}
                    className="imgContainer"
                    style={{
                        backgroundImage: `url(${RightImg})`,
                    }}
                />
            </Container>
        </section>
    );
}

export default DefLeftRightSection;
