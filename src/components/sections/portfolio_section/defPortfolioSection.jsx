import { Circle } from 'rc-progress';
import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PortfolioImg from '../../../assets/img/portfolio.jpg';
import PortfolioStyle from './defPortfolioSection.module.css';

function DefPortfolioSection() {
    return (
        <section id="portfolio" className={`${PortfolioStyle.portfolio} py-5`}>
            <Container fluid className="px-4">
                <div className="d-flex flex-wrap align-items-center">
                    <Col
                        md={5}
                        className={`${PortfolioStyle.imgContainer} d-flex flex-column justify-content-end p-4 text-white`}
                        style={{
                            backgroundImage: `url(${PortfolioImg})`,
                        }}
                    >
                        <div className="title h3 pb-3">Lorem, ipsum.</div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <a href="##" className="btn p-0">
                                    <i className="bx bxl-meta bx-sm p-2 rounded-circle bg-white" />
                                </a>
                                <a href="##" className="btn p-0 ms-3">
                                    <i className="bx bxl-netlify bx-sm p-2 rounded-circle bg-white" />
                                </a>
                            </div>

                            <Button
                                variant="dark"
                                href="##"
                                className={`${PortfolioStyle.portfolioBtn}`}
                            >
                                Lorem.
                            </Button>
                        </div>
                    </Col>
                    <Col
                        md={7}
                        className="d-flex flex-column pt-4 pt-md-0 ps-md-4 justify-content-center"
                    >
                        <div className="title h3">Lorem, ipsum.</div>

                        <div className={`${PortfolioStyle.hLine}`} />

                        <div className="subtitle h5">Lorem ipsum dolor sit amet.</div>

                        <div className="summary pt-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                            provident rem, labore nisi veritatis, voluptates maxime optio eaque fuga
                            architecto tempora sed, fugiat temporibus? Magni iusto hic ullam
                            dignissimos deserunt, explicabo minus numquam sit nisi minima reiciendis
                            et quasi quis veritatis error ipsa quam eum esse. Nostrum facere
                            accusamus facilis.
                        </div>

                        <div
                            className={`${PortfolioStyle.portfolioAttributes} px-3 py-4 mt-3 d-flex justify-content-center`}
                        >
                            <div className="d-flex flex-column">
                                <div className="mb-2">Lorem, ipsum dolor.</div>

                                <div>
                                    <span
                                        className={`${PortfolioStyle.badgePrimary} badge rounded-pill me-2`}
                                    >
                                        Primary
                                    </span>
                                    <span
                                        className={`${PortfolioStyle.badgeSecondary} badge rounded-pill me-2`}
                                    >
                                        Secondary
                                    </span>
                                </div>
                            </div>

                            <div className="d-flex flex-column ms-5">
                                <div className="mb-2">Lorem, ipsum dolor.</div>

                                <div>
                                    <span
                                        className={`${PortfolioStyle.badgePrimary} badge rounded-pill me-2`}
                                    >
                                        Primary
                                    </span>
                                    <span
                                        className={`${PortfolioStyle.badgeSecondary} badge rounded-pill me-2`}
                                    >
                                        Secondary
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${PortfolioStyle.portfolioSkills} px-3 py-4 mt-3 d-flex align-items-center justify-content-center`}
                        >
                            <div className="d-flex flex-column">
                                <Circle
                                    percent={20}
                                    trailColor="gray"
                                    strokeWidth={4}
                                    strokeColor="red"
                                />
                                <div className="title mt-2">Lorem, ipsum.</div>
                            </div>

                            <div className="d-flex flex-column ms-5">
                                <Circle
                                    percent={40}
                                    trailColor="gray"
                                    strokeWidth={4}
                                    strokeColor="red"
                                />
                                <div className="title mt-2">Lorem, ipsum.</div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <Button
                                variant="dark"
                                href="##"
                                className={`${PortfolioStyle.portfolioBtn}`}
                            >
                                Lorem.
                            </Button>
                        </div>
                    </Col>
                </div>
            </Container>
        </section>
    );
}

export default DefPortfolioSection;
