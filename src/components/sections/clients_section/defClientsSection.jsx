/* eslint-disable import/no-unresolved */
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import AdobeImg from '../../../assets/img/clients_img/adobe.png';
import GoogleImg from '../../../assets/img/clients_img/google.png';
import YahooImg from '../../../assets/img/clients_img/yahoo.png';
import ClientsStyle from './defClientsSection.module.css';

function DefClientsSection() {
    return (
        <section id="clients" className={`${ClientsStyle.clients}`}>
            <Container fluid="xl">
                <div className="d-flex flex-column align-items-center text-center py-5">
                    <div className="title">Lorem, ipsum.</div>

                    <div className="h-line" />

                    <div className="subtitle display-4">Lorem ipsum dolor sit amet.</div>

                    <div className="summery">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit,
                        iusto!
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    autoplay
                    loop
                >
                    <SwiperSlide className="col-2 d-flex align-self-center">
                        <Image className="h-100 w-100 p-4" src={`${AdobeImg}`} />
                    </SwiperSlide>
                    <SwiperSlide className="col-2 d-flex align-self-center">
                        <Image className="h-100 w-100 p-4" src={`${GoogleImg}`} />
                    </SwiperSlide>
                    <SwiperSlide className="col-2 d-flex align-self-center">
                        <Image className="h-100 w-100 p-4" src={`${YahooImg}`} />
                    </SwiperSlide>
                    <SwiperSlide className="col-2 d-flex align-self-center">
                        <Image className="h-100 w-100 p-4" src={`${AdobeImg}`} />
                    </SwiperSlide>
                    <SwiperSlide className="col-2 d-flex align-self-center">
                        <Image className="h-100 w-100 p-4" src={`${GoogleImg}`} />
                    </SwiperSlide>
                    <SwiperSlide className="col-2 d-flex align-self-center">
                        <Image className="h-100 w-100 p-4" src={`${YahooImg}`} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
}

export default DefClientsSection;
