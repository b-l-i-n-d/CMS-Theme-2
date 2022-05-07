import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import SkillsStyle from './defSkillsSection.module.css';

function DefSkillsSection() {
    return (
        <section id="skills" className={`${SkillsStyle.skills} py-5`}>
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

                <Row className="d-flex flex-wrap justify-content-between">
                    <Col sm={6} className="p-3">
                        <div className="d-flex justify-content-between py-2 h6">
                            <div>HTML</div>
                            <div>0%</div>
                        </div>

                        <ProgressBar now={0} label={`${0}%`} variant="dark" />
                    </Col>

                    <Col sm={6} className="p-3">
                        <div className="d-flex justify-content-between py-2 h6">
                            <div>CSS</div>
                            <div>20%</div>
                        </div>

                        <ProgressBar now={20} label={`${20}%`} variant="dark" />
                    </Col>

                    <Col sm={6} className="p-3">
                        <div className="d-flex justify-content-between py-2 h6">
                            <div>JavaScript</div>
                            <div>40%</div>
                        </div>

                        <ProgressBar now={40} label={`${40}%`} variant="dark" />
                    </Col>

                    <Col sm={6} className="p-3">
                        <div className="d-flex justify-content-between py-2 h6">
                            <div>React</div>
                            <div>75%</div>
                        </div>

                        <ProgressBar now={75} label={`${75}%`} variant="dark" />
                    </Col>

                    <Col sm={6} className="p-3">
                        <div className="d-flex justify-content-between py-2 h6">
                            <div>Spring</div>
                            <div>85%</div>
                        </div>

                        <ProgressBar now={85} label={`${85}%`} variant="dark" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DefSkillsSection;
