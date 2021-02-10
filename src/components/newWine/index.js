import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Controller, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "./style.scss";
import {BtnLearn, BtnView} from "../../components/btns";
import {newWines, wineImg} from './const';
const NewWine = () => {
    SwiperCore.use([Controller]);
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const [firstSwiper, setFirstSwiper] = React.useState(null);
    const [secondSwiper, setSecondSwiper] = React.useState(null);

    const params = {
        slidesPerView:1,
    }
    return (
        <section className="new" id="new">
            <div className="container">
                <div className="new__row row">
                    <div className="col-6">
                        <div className="">
                        <Swiper {...params} onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}>
                            {newWines.map(item => {
                                return(
                                    <SwiperSlide className="new__item new__item--left" >
                                    <span className="new__suptitle">New Wines</span>
                                    <h2 className="new__title">{item.title}</h2>
                                    <span className="new__subtitle">{item.subtitle}</span>
                                    <p className="new__description">{item.description}</p>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                            <div className="new__buttons row">
                            <BtnLearn/>
                            <BtnView/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="new__right">
                            <div className="new__circle">
                                <svg width="578" height="487" viewBox="0 0 578 487" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="292" cy="262" r="187" fill="#E2B024" />
                                    <path d="M5.5 211V5H573V211" stroke="#E2B024" stroke-width="10" />
                                    <path d="M572.5 276L572.5 482L5 482L5.00002 276" stroke="#E2B024"
                                        stroke-width="10" />
                                </svg>
                            </div> 
                       

                              <Swiper {...params} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}>
                                     {wineImg.map(item => {
                                        return(
                                           <SwiperSlide className="new__item--right" >
                                                 <img src={item.img1} alt="" className="new__img"/>
                                           </SwiperSlide>
                                   
                                        )
                                    })}
                              </Swiper>
                          
                                {/* <div className="new__arrows">
                                    <span className="slider__prev">Prev</span>
                                    <span className="slider__next">Next</span>
                                </div> */}

              
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewWine;
