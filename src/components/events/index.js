import React from 'react';
import "./style.scss";
import {EventsData}  from './const';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Events = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const params = {
        slidesPerView:1,   
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
             observer: true,
            observeParents: true
    }
    return(
       <section className="events" id="events">
            <div className="container">
                <div className="events__inner">
                    <h2 className="events__title section__title">
                        Featured <span className="orange">Events</span>
                    </h2>
                   
                        <Swiper >
                           {EventsData.map(item => {
                               return (
                                <SwiperSlide className="events__row row">
                                    <div className="col-4">
                                    <div className="events__item--left">
                                        <img src={item.img} className="events__img"/>
                                    </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="events__item--right">
                                            <h5 className="events__name">{item.event}</h5>
                                            <time className="events__date">15 Sept</time>
                                            <p className="events__text">
                                              {item.description}
                                            </p>
                                            <div className="events__link readmore">
                                                <a href="" className="link">Read <span className="uppercase">more</span></a>
                                            </div>
                                        </div>
                                     </div>
                                </SwiperSlide>
                               )
                           })}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                        </Swiper>                 
                </div>

            </div>
        </section>
       
    )
}

export default Events
