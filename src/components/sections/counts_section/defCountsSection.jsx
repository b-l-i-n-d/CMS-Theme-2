import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CountsStyle from './defCountsSection.module.css';

function DefCountsSection() {
    return (
        <section id="counts" className={`${CountsStyle.counts}`}>
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

                <div className="d-flex flex-wrap justify-content-center">
                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 d-flex flex-column align-items-stretch"
                    >
                        <div className={`${CountsStyle.countsCard} darkBoxShadow`}>
                            <div className={`${CountsStyle.title} display-5`}>1,345</div>

                            <div className={`${CountsStyle.hLine}`} />

                            <div
                                className={`${CountsStyle.subtitle} d-flex align-items-center pt-2`}
                            >
                                <span className="me-3 text-dark">
                                    <i
                                        className={`${CountsStyle.countIcon1} bx bxs-ghost p-2 rounded-circle`}
                                    />
                                </span>
                                <span>Lorem.</span>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 d-flex flex-column align-items-stretch"
                    >
                        <div className={`${CountsStyle.countsCard} darkBoxShadow`}>
                            <div className={`${CountsStyle.title} display-5`}>5,458</div>

                            <div className={`${CountsStyle.hLine}`} />

                            <div
                                className={`${CountsStyle.subtitle} d-flex align-items-center pt-2`}
                            >
                                <span className="me-3 text-dark">
                                    <i
                                        className={`${CountsStyle.countIcon2} bx bxs-chip p-2 rounded-circle`}
                                    />
                                </span>
                                <span>Lorem.</span>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 d-flex flex-column align-items-stretch"
                    >
                        <div className={`${CountsStyle.countsCard} darkBoxShadow`}>
                            <div className={`${CountsStyle.title} display-5`}>15.23k</div>

                            <div className={`${CountsStyle.hLine}`} />

                            <div
                                className={`${CountsStyle.subtitle} d-flex align-items-center pt-2`}
                            >
                                <span className="me-3 text-dark">
                                    <i
                                        className={`${CountsStyle.countIcon3} bx bxs-vial p-2 rounded-circle`}
                                    />
                                </span>
                                <span>Lorem.</span>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-3 d-flex flex-column align-items-stretch"
                    >
                        <div className={`${CountsStyle.countsCard} darkBoxShadow`}>
                            <div className={`${CountsStyle.title} display-5`}>156</div>

                            <div className={`${CountsStyle.hLine}`} />

                            <div
                                className={`${CountsStyle.subtitle} d-flex align-items-center pt-2`}
                            >
                                <span className="me-3">
                                    <i
                                        className={`${CountsStyle.countIcon4} bx bxs-spa p-2 rounded-circle`}
                                    />
                                </span>
                                <span>Lorem.</span>
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    );
}

export default DefCountsSection;
