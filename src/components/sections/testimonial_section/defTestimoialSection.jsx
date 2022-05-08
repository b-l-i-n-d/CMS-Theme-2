/* eslint-disable import/no-unresolved */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import TestimonialImg1 from '../../../assets/img/testimonial/artur-tumasjan-IDbeTFgI9As-unsplash.jpg';
import TestimonialImg2 from '../../../assets/img/testimonial/girl-with-red-hat--RkP8y-XMLQ-unsplash.jpg';
import TestimonialImg3 from '../../../assets/img/testimonial/stone-hood-sfAEazGOY0M-unsplash.jpg';
import TestimonialsStyle from './defTestimonialSection.module.css';

function SwiperButtonPrev() {
    const swiper = useSwiper();
    return (
        <Button variant="outline-dark" onClick={() => swiper.slidePrev()}>
            <i className="bx bxs-left-arrow" />
        </Button>
    );
}

function SwiperButtonNext() {
    const swiper = useSwiper();
    return (
        <Button variant="outline-dark" onClick={() => swiper.slideNext()}>
            <i className="bx bxs-right-arrow" />
        </Button>
    );
}

function DefTestimoialSection() {
    return (
        <section id="testimonials" className={`${TestimonialsStyle.testimonials} py-5`}>
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
                    className={`${TestimonialsStyle.testimonialSwiper}`}
                    modules={[Pagination, Autoplay]}
                    autoplay
                    loop
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide className={`${TestimonialsStyle.testimonialSlide}`}>
                        <div
                            className={`${TestimonialsStyle.testimonialCard} d-flex align-items-center px-3 gap-3 darkBoxShadow`}
                        >
                            <Col
                                xs={4}
                                className={`${TestimonialsStyle.topn30px} text-center position-relative`}
                            >
                                <div
                                    className={`${TestimonialsStyle.testimonialCardImage} imgContainer`}
                                    style={{ backgroundImage: `url(${TestimonialImg1})` }}
                                />

                                <div
                                    className={`${TestimonialsStyle.top5px} pt-3 position-relative title h5 text-uppercase`}
                                >
                                    Lorem, ipsum.
                                </div>
                            </Col>

                            <Col xs={8} className="p-2 subtitle">
                                <div className={`${TestimonialsStyle.testimonialQuote} display-6`}>
                                    <i className="bx bxs-quote-left" />
                                </div>

                                <div className="text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                    maiores atque, amet quidem quis labore numquam suscipit expedita
                                    explicabo iste?
                                </div>
                            </Col>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${TestimonialsStyle.testimonialSlide}`}>
                        <div
                            className={`${TestimonialsStyle.testimonialCard} d-flex align-items-center px-3 gap-3 darkBoxShadow`}
                        >
                            <Col
                                xs={4}
                                className={`${TestimonialsStyle.topn30px} text-center position-relative`}
                            >
                                <div
                                    className={`${TestimonialsStyle.testimonialCardImage} imgContainer`}
                                    style={{ backgroundImage: `url(${TestimonialImg2})` }}
                                />

                                <div
                                    className={`${TestimonialsStyle.top5px} pt-3 position-relative title h5 text-uppercase`}
                                >
                                    Lorem, ipsum.
                                </div>
                            </Col>

                            <Col xs={8} className="p-2 subtitle">
                                <div className={`${TestimonialsStyle.testimonialQuote} display-6`}>
                                    <i className="bx bxs-quote-left" />
                                </div>

                                <div className="text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                    maiores atque, amet quidem quis labore numquam suscipit expedita
                                    explicabo iste?
                                </div>
                            </Col>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${TestimonialsStyle.testimonialSlide}`}>
                        <div
                            className={`${TestimonialsStyle.testimonialCard} d-flex align-items-center px-3 gap-3 darkBoxShadow`}
                        >
                            <Col
                                xs={4}
                                className={`${TestimonialsStyle.topn30px} text-center position-relative`}
                            >
                                <div
                                    className={`${TestimonialsStyle.testimonialCardImage} imgContainer`}
                                    style={{ backgroundImage: `url(${TestimonialImg3})` }}
                                />

                                <div
                                    className={`${TestimonialsStyle.top5px} pt-3 position-relative title h5 text-uppercase`}
                                >
                                    Lorem, ipsum.
                                </div>
                            </Col>

                            <Col xs={8} className="p-2 subtitle">
                                <div className={`${TestimonialsStyle.testimonialQuote} display-6`}>
                                    <i className="bx bxs-quote-left" />
                                </div>

                                <div className="text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                    maiores atque, amet quidem quis labore numquam suscipit expedita
                                    explicabo iste?
                                </div>
                            </Col>
                        </div>
                    </SwiperSlide>

                    <div
                        className={`${TestimonialsStyle.topn20px} d-inline-flex w-100 justify-content-end position-relative px-5`}
                    >
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div>
                </Swiper>
            </Container>
        </section>
    );
}

export default DefTestimoialSection;
