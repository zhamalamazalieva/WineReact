import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { OfferData } from "./const";
import './style.scss';

   

const Offer = () => {
     SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const params = {
        slidesPerView:3,
        // centeredSlides:true,
        pagination:{ 
            clickable: false,
        }
    }
    return (
        <section className="offer" id="offer">
        <div className="container">
            <h3 className="offer__title section__title">Amazing <span className="orange">offer</span></h3>
            <Swiper {...params} className="offer__slider offer__row row offer__margin">
                {OfferData.map(item => {
                    return(
                        
                        <SwiperSlide className="col-4">
                        {({isCenter}) => (
                                      <div className={`offer__item ${isCenter ? 'active' : ''}`}>
                        <img src={item.img} alt="" className="offer__wine"/>
                            <div class="offer__info">
                                <span className="offer__name">{item.name}</span>
                                <span className="offer__price">${item.price}</span>
                            </div>
                            <div className="offer__opacity"></div>                        
                    </div>)}
                         </SwiperSlide>
                    )
                })}               
                
            </Swiper>
        </div>
    </section>
    )
}

export default Offer
