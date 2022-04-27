import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaPlayCircle } from 'react-icons/fa';
import BackgroundImage from '../../../assets/img/hero-img.jpg';
import HeroSectionStyles from './defHeroSection.module.css';

function DefHeroSection() {
    return (
        <section
            id="hero"
            className={`${HeroSectionStyles.hero} vh-100 img-container`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <Container className="d-flex flex-wrap mx-auto h-100">
                <Row>
                    <Col
                        sm={9}
                        md={8}
                        lg={7}
                        className="d-flex flex-column justify-content-center gap-5"
                    >
                        <div className={`${HeroSectionStyles.title} display-4`}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                            <span className="text-highlight"> deleniti.</span>
                        </div>
                        <div className="subtitle h5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                            mollitia impedit voluptatem modi atque dicta non eius aliquam quae
                            deserunt.
                        </div>
                        <div className="d-inline-flex align-items-center gap-3 gap-md-4 gap-lg-5">
                            <Button className="btn-dark dark-box-shadow rounded-3 border border-2 border-dark text-capitalize">
                                Lorem.
                            </Button>
                            <Button
                                href="##"
                                className="btn-outline-dark dark-box-shadow rounded-3"
                                type="button"
                            >
                                <FaPlayCircle size={42} />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DefHeroSection;
