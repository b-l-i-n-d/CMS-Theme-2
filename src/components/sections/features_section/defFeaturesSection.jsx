import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaCat, FaCrow, FaDog, FaNapster } from 'react-icons/fa';
import FeatureStyle from './defFeaturesSection.module.css';

function DefFeaturesSection() {
    return (
        <section id="features" className={`${FeatureStyle.features} py-5`}>
            <Container>
                <div className="d-flex flex-column align-items-center text-center py-5">
                    <div className="title">Lorem, ipsum.</div>

                    <div className="h-line" />

                    <div className="subtitle display-4">Lorem ipsum dolor sit amet.</div>

                    <div className="summery">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit,
                        iusto!
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${FeatureStyle.featuresCard} border border-2 p-3`}>
                            <div className={`${FeatureStyle.icon} p-3`}>
                                <FaCrow />
                            </div>
                            <div>
                                <div className="title h3">Lorem, ipsum.</div>
                            </div>
                            <div className={`${FeatureStyle.description} h6 `}>
                                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
                                dolor sit amet consectetur adipisicing elit. Laborum, voluptatem.
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${FeatureStyle.featuresCard} border border-2 p-3`}>
                            <div className={`${FeatureStyle.icon} p-3`}>
                                <FaCat />
                            </div>
                            <div>
                                <div className="title h3">Lorem, ipsum.</div>
                            </div>
                            <div className={`${FeatureStyle.description} h6 `}>
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${FeatureStyle.featuresCard} border border-2 p-3`}>
                            <div className={`${FeatureStyle.icon} p-3`}>
                                <FaDog />
                            </div>
                            <div>
                                <div className="title h3">Lorem, ipsum.</div>
                            </div>
                            <div className={`${FeatureStyle.description} h6 `}>
                                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
                                dolor sit amet consectetur adipisicing elit. Laborum, voluptatem.
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${FeatureStyle.featuresCard} border border-2 p-3`}>
                            <div className={`${FeatureStyle.icon} p-3`}>
                                <FaNapster />
                            </div>
                            <div>
                                <div className="title h3">Lorem, ipsum.</div>
                            </div>
                            <div className={`${FeatureStyle.description} h6 `}>
                                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
                                dolor sit amet consectetur adipisicing elit. Laborum, voluptatem.
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    );
}

export default DefFeaturesSection;
