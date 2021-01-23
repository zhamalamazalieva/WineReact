import React from 'react';
import LogoImg from '../../assets/img/png/logo.png';
import HeaderList from './list';
import Icons from './icons';
import Nav from './nav';
import Login from './login';
import './style.scss';

const Header = () => {



    return (
        <section className='header'>
            <div className='container'>
                <div className='row header__row'>
                    <div className='col-5 header__left'>
                        <span className='header__slogan'>We Ship Everywhere! Free In The Us!</span>
                    </div>
                    <div className='col-2'>
                        <img src={LogoImg} alt='logo' />
                    </div>
                    <div className='col-5 header__right'>
                        <HeaderList />
                        <Icons />
                    </div>
                </div>
                <Nav />
            </div>
        </section>
    )
}

export default Header;
