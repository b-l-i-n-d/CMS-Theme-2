/* eslint-disable import/no-unresolved */
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContentSliderImg2 from '../../../assets/img/content-slider/daniil-silantev-F6Da4r2x5to-unsplash.jpg';
import ContentSliderImg1 from '../../../assets/img/content-slider/jason-ortego-buF62ewDLcQ-unsplash.jpg';
import ContentSliderStyle from './defContentSlider.module.css';

function DefContentSlider() {
    return (
        <section id="contentSlider" className={`${ContentSliderStyle.contentSlider} text-white`}>
            <div className="vw-100">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    slidesPerView={1}
                    autoplay
                    loop
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div
                            className={`${ContentSliderStyle.imgContainer} d-flex
                                flex-column
                                justify-content-end
                                gap-2
                                vh-100`}
                            style={{ backgroundImage: `url(${ContentSliderImg1})` }}
                        >
                            <div className="h3 title">Lorem ipsum dolor sit amet.</div>

                            <div className="h6 subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                                ullam.
                            </div>

                            <div className="pt-5">
                                <a
                                    href="##"
                                    className="px-3
                                        py-2
                                        btn btn-dark
                                        shadow-lg
                                        rounded-3"
                                >
                                    Lorem, ipsum.
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`${ContentSliderStyle.imgContainer} d-flex
                                flex-column
                                justify-content-end
                                gap-2
                                vh-100`}
                            style={{ backgroundImage: `url(${ContentSliderImg2})` }}
                        >
                            <div className="h3 title">Lorem ipsum dolor sit amet.</div>

                            <div className="h6 subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                                ullam.
                            </div>

                            <div className="pt-5">
                                <a
                                    href="##"
                                    className="px-3
                                        py-2
                                        btn btn-dark
                                        shadow-lg
                                        rounded-3"
                                >
                                    Lorem, ipsum.
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default DefContentSlider;
