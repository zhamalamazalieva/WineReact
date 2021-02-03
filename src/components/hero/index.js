import React from 'react'
import axios from 'axios';
import {HeroList} from './const';
import './style.scss';


const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
            <div className='hero__column column'>
                <span className='hero__suptitle'>{HeroList[0].suptitle}</span>
                <h1 className='hero__title'>{HeroList[0].title}</h1>
                <p className='hero__description'>{HeroList[0].text}</p>
                <img src={HeroList[0].picture}/>
            </div>
            </div>
        </section>
    )
}

export default Hero;
