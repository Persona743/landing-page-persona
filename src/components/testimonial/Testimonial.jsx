import React from 'react';

import AVATAR1 from '/assets/images/avatar1.jpg';
import AVATAR2 from '/assets/images/avatar2.jpg';
import AVATAR3 from '/assets/images/avatar3.jpg';

import './testimonial.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVATAR1,
        name: 'Donya Kharazi',
        review: 'Quis culpa minim est reprehenderit. Labore veniam elit anim esse officia enim sunt occaecat sunt et cupidatat duis aute esse. Reprehenderit minim irure sint ex aliquip velit non id cillum. Deserunt do nostrud non duis mollit id sit.',
    },
    {
        avatar: AVATAR2,
        name: 'Dave Sloute',
        review: 'Quis culpa minim est reprehenderit. Labore veniam elit anim esse officia enim sunt occaecat sunt et cupidatat duis aute esse. Reprehenderit minim irure sint ex aliquip velit non id cillum. Deserunt do nostrud non duis mollit id sit.',
    },
    {
        avatar: AVATAR3,
        name: 'Steve Rjavini',
        review: 'Quis culpa minim est reprehenderit. Labore veniam elit anim esse officia enim sunt occaecat sunt et cupidatat duis aute esse. Reprehenderit minim irure sint ex aliquip velit non id cillum. Deserunt do nostrud non duis mollit id sit.',
    },
];

export default function Testimonial() {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonial</h2>

            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="container testimonials__container"
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client__avatar">
                                <img src={avatar} alt="avatar1" />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
