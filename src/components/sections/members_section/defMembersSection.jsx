/* eslint-disable import/no-unresolved */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Member1 from '../../../assets/img/members/alison-wang-unsplash.jpg';
import Member2 from '../../../assets/img/members/melanie-these-unsplash.jpg';
import Member3 from '../../../assets/img/members/ryan-yao-unsplash.jpg';
import Member4 from '../../../assets/img/members/shubham-dhage-unsplash.jpg';
import Member5 from '../../../assets/img/members/shubham-dhage2-unsplash.jpg';
import MembersStyle from './defMembersSection.module.css';

function DefMembersSection() {
    return (
        <section id="members" className={`${MembersStyle.members} py-5`}>
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

                <Swiper
                    modules={[Autoplay]}
                    autoplay
                    loop
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Col className="p-3 text-center d-flex flex-column">
                            <div className={`${MembersStyle.memberCard}`}>
                                <div
                                    className="imgContainer w-100"
                                    style={{ backgroundImage: `url(${Member1})` }}
                                />
                                <div className="pt-3">
                                    <div>
                                        <div className="title h5">Lorem, ipsum.</div>

                                        <div className="description h6 py-1">Lorem.</div>
                                    </div>
                                </div>
                                <div
                                    className={`${MembersStyle.socialIcons} d-flex justify-content-around h5 p-2`}
                                >
                                    <a href="##">
                                        <i className="bx bxl-facebook-circle p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-instagram p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-discord-alt p-2 rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col className="p-3 text-center d-flex flex-column">
                            <div className={`${MembersStyle.memberCard}`}>
                                <div
                                    className="imgContainer w-100"
                                    style={{ backgroundImage: `url(${Member2})` }}
                                />
                                <div className="pt-3">
                                    <div>
                                        <div className="title h5">Lorem, ipsum.</div>

                                        <div className="description h6 py-1">Lorem.</div>
                                    </div>
                                </div>
                                <div
                                    className={`${MembersStyle.socialIcons} d-flex justify-content-around h5 p-2`}
                                >
                                    <a href="##">
                                        <i className="bx bxl-facebook-circle p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-instagram p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-discord-alt p-2 rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col className="p-3 text-center d-flex flex-column">
                            <div className={`${MembersStyle.memberCard}`}>
                                <div
                                    className="imgContainer w-100"
                                    style={{ backgroundImage: `url(${Member3})` }}
                                />
                                <div className="pt-3">
                                    <div>
                                        <div className="title h5">Lorem, ipsum.</div>

                                        <div className="description h6 py-1">Lorem.</div>
                                    </div>
                                </div>
                                <div
                                    className={`${MembersStyle.socialIcons} d-flex justify-content-around h5 p-2`}
                                >
                                    <a href="##">
                                        <i className="bx bxl-facebook-circle p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-instagram p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-discord-alt p-2 rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col className="p-3 text-center d-flex flex-column">
                            <div className={`${MembersStyle.memberCard}`}>
                                <div
                                    className="imgContainer w-100"
                                    style={{ backgroundImage: `url(${Member4})` }}
                                />
                                <div className="pt-3">
                                    <div>
                                        <div className="title h5">Lorem, ipsum.</div>

                                        <div className="description h6 py-1">Lorem.</div>
                                    </div>
                                </div>
                                <div
                                    className={`${MembersStyle.socialIcons} d-flex justify-content-around h5 p-2`}
                                >
                                    <a href="##">
                                        <i className="bx bxl-facebook-circle p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-instagram p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-discord-alt p-2 rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col className="p-3 text-center d-flex flex-column">
                            <div className={`${MembersStyle.memberCard}`}>
                                <div
                                    className="imgContainer w-100"
                                    style={{ backgroundImage: `url(${Member5})` }}
                                />
                                <div className="pt-3">
                                    <div>
                                        <div className="title h5">Lorem, ipsum.</div>

                                        <div className="description h6 py-1">Lorem.</div>
                                    </div>
                                </div>
                                <div
                                    className={`${MembersStyle.socialIcons} d-flex justify-content-around h5 p-2`}
                                >
                                    <a href="##">
                                        <i className="bx bxl-facebook-circle p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-instagram p-2 rounded-circle" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bxl-discord-alt p-2 rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
}

export default DefMembersSection;
