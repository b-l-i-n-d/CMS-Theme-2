import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PricingStyle from './defPricingSection.module.css';

function DefPricingSection() {
    return (
        <section id="pricing" className={`${PricingStyle.pricing} py-5`}>
            <Container fluid="xl">
                <div className="d-flex flex-column align-items-center text-center py-5">
                    <div className="title">Lorem, ipsum.</div>

                    <div className="hLine" />

                    <div className="subtitle display-4">Lorem ipsum dolor sit amet.</div>

                    <div className="summery">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit,
                        iusto!
                    </div>
                </div>

                <Row className="d-flex flex-wrap justify-content-center">
                    <Col md={6} lg={4} className="p-3 d-flex align-items-stretch">
                        <div
                            className={`${PricingStyle.pricingCard} ${PricingStyle.darkBoxShadow} w-100 p-5`}
                        >
                            <div className="text-center">
                                <div className={`${PricingStyle.title} h5`}>Basic</div>

                                <div className={`${PricingStyle.hLine}`} />

                                <div className={`${PricingStyle.cost} display-5 pb-2`}>
                                    <span className="h4 pe-2">$</span>15.00
                                </div>

                                <div className="py-2">
                                    <span
                                        className={`${PricingStyle.duration} px-4 py-2 rounded-pill h6`}
                                    >
                                        /<span className="ps-2">month</span>
                                    </span>
                                </div>
                            </div>

                            <div className={`${PricingStyle.features} pt-5 pb-4`}>
                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem, ipsum.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor.</span>
                                </div>
                            </div>

                            <Button
                                variant="outline-dark"
                                className={`${PricingStyle.buyBtn} py-3 rounded-pill text-uppercase w-100`}
                            >
                                Lorem, ipsum.
                            </Button>
                        </div>
                    </Col>

                    <Col md={6} lg={4} className="p-3 d-flex align-items-stretch">
                        <div
                            className={`${PricingStyle.pricingCard} ${PricingStyle.darkBoxShadow} ${PricingStyle.active} w-100 p-5`}
                        >
                            <div className="text-center">
                                <div className={`${PricingStyle.title} h5`}>Standard</div>

                                <div className={`${PricingStyle.hLine}`} />

                                <div className={`${PricingStyle.cost} display-5 pb-2`}>
                                    <span className="h4 pe-2">$</span>25.00
                                </div>

                                <div className="py-2">
                                    <span
                                        className={`${PricingStyle.duration} px-4 py-2 rounded-pill h6`}
                                    >
                                        /<span className="ps-2">month</span>
                                    </span>
                                </div>
                            </div>

                            <div className={`${PricingStyle.features} pt-5 pb-4`}>
                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem, ipsum.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor.</span>
                                </div>
                            </div>

                            <Button
                                variant="outline-dark"
                                className={`${PricingStyle.buyBtn} py-3 rounded-pill text-uppercase w-100`}
                            >
                                Lorem, ipsum.
                            </Button>
                        </div>
                    </Col>

                    <Col md={6} lg={4} className="p-3 d-flex align-items-stretch">
                        <div
                            className={`${PricingStyle.pricingCard} ${PricingStyle.darkBoxShadow} w-100 p-5`}
                        >
                            <div className="text-center">
                                <div className={`${PricingStyle.title} h5`}>Enterprise</div>

                                <div className={`${PricingStyle.hLine}`} />

                                <div className={`${PricingStyle.cost} display-5 pb-2`}>
                                    <span className="h4 pe-2">$</span>99.00
                                </div>

                                <div className="py-2">
                                    <span
                                        className={`${PricingStyle.duration} px-4 py-2 rounded-pill h6`}
                                    >
                                        /<span className="ps-2">month</span>
                                    </span>
                                </div>
                            </div>

                            <div className={`${PricingStyle.features} pt-5 pb-4`}>
                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem, ipsum.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>

                                <div className="d-flex align-items-center gap-3 py-1">
                                    <i className="bx bxs-check-circle" />
                                    <span>Lorem ipsum dolor.</span>
                                </div>
                            </div>

                            <Button
                                variant="outline-dark"
                                className={`${PricingStyle.buyBtn} py-3 rounded-pill text-uppercase w-100`}
                            >
                                Lorem, ipsum.
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DefPricingSection;
