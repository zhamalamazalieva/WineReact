import React from 'react';
import "./style.scss";
import {ReviewData} from "./const";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
const Reviews = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const params = {
        slidesPerView:1,
        pagination:{ 
            clickable: false }
    }
    return (
        <section className="review" id="review">
        <div className="container">
            <div className="review__inner">
                <h2 className="review__title section__title">Client <span className="orange">Review</span></h2>
                <div className="review__slider">
                   <Swiper {...params}>
                   {ReviewData.map(item  => {
                       return (
                        <SwiperSlide>
                        <div className="slider__item column">
                        <div className="review__img">
                                <img src={item.img} alt=""/>
                            </div>
                            <span className="review__name">{item.author}</span>
                            <p className="review__description">
                                {item.text}
                            </p>
                  
                        </div>
                        </SwiperSlide>
                       )
                   })}
                   </Swiper>
                </div>
            </div>
        </div>
        <div className="review__opacity"></div>
    </section>
    )
}

export default Reviews;
