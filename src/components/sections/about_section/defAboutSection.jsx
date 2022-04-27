import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AboutImage from '../../../assets/img/about.jpg';

function DefAboutSection() {
    return (
        <section id="about" className="about py-5">
            <Container className="gap-3 gap-lg-0 flex-wrap-reverse py-5">
                <Row>
                    <Col
                        lg={6}
                        className="d-flex flex-column justify-content-center gap-3 pe-lg-3 pb-3 pb-lg-0"
                    >
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
                    </Col>
                    <Col
                        lg={6}
                        className="img-container"
                        style={{ backgroundImage: `url(${AboutImage})` }}
                    />
                </Row>
            </Container>
        </section>
    );
}

export default DefAboutSection;
