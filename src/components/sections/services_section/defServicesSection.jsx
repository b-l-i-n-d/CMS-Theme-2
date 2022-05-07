import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ServicesStyle from './defServicesSection.module.css';

function DefServicesSection() {
    return (
        <section id="services" className={`${ServicesStyle.services} py-5`}>
            <Container fluid="xl">
                <div className="d-flex flex-column align-items-center text-center py-5">
                    <div className="title">Lorem, ipsum.</div>

                    <div className="hLine" />

                    <div className="subtitle display-4">Lorem ipsum dolor sit amet.</div>

                    <div className="summary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit,
                        iusto!
                    </div>
                </div>

                <Row className="d-flex flex-wrap justify-content-center">
                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${ServicesStyle.servicesCard} border border-2 p-3`}>
                            <div className={`${ServicesStyle.iconBox} p-3`}>
                                <i className={`${ServicesStyle.icon} bx bxs-invader p-1 `} />
                            </div>

                            <div>
                                <div className="titile h3">Lorem, ipsum.</div>
                                <div className={`${ServicesStyle.description} h6 py-3`}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Obcaecati, facere!
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${ServicesStyle.servicesCard} border border-2 p-3`}>
                            <div className={`${ServicesStyle.iconBox} p-3`}>
                                <i className={`${ServicesStyle.icon} bx bxs-cat p-1 `} />
                            </div>

                            <div>
                                <div className="titile h3">Lorem, ipsum.</div>
                                <div className={`${ServicesStyle.description} h6 py-3`}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
                                    dolor sit amet consectetur adipisicing elit. Laborum,
                                    voluptatem.
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${ServicesStyle.servicesCard} border border-2 p-3`}>
                            <div className={`${ServicesStyle.iconBox} p-3`}>
                                <i className={`${ServicesStyle.icon} bx bxs-store p-1 `} />
                            </div>

                            <div>
                                <div className="titile h3">Lorem, ipsum.</div>
                                <div className={`${ServicesStyle.description} h6 py-3`}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Obcaecati, facere!
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 text-center d-flex align-items-stretch"
                    >
                        <div className={`${ServicesStyle.servicesCard} border border-2 p-3`}>
                            <div className={`${ServicesStyle.iconBox} p-3`}>
                                <i className={`${ServicesStyle.icon} bx bxs-leaf p-1 `} />
                            </div>

                            <div>
                                <div className="titile h3">Lorem, ipsum.</div>
                                <div className={`${ServicesStyle.description} h6 py-3`}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
                                    dolor sit amet consectetur adipisicing elit. Laborum,
                                    voluptatem.
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DefServicesSection;
