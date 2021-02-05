import React from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { OfferData } from "./const";
   

const Offer = () => {
     SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const params = {
        slidesPerView:3,
        pagination:{ 
            clickable: false }
    }
    return (
        <section className="offer" id="offer">
        <div className="container">
            <h3 className="offer__title section__title">Amazing <span className="orange">offer</span></h3>
            <Swiper {...params} className="offer__slider offer__row row">
                {OfferData.map(item => {
                    return(
                        <div className="col-4">
                        <SwiperSlide className="offer__item slick__active">
                        <img src={item.img} alt="" className="offer__wein"/>
                            <div class="offer__info">
                                <span className="offer__name">{item.name}</span>
                                <span className="offer__price">${item.price}</span>
                            </div>
                            <div className="offer__opacity"></div>
                        </SwiperSlide>
                    </div>
                    )
                })}               
                
            </Swiper>
        </div>
    </section>
    )
}

export default Offer
