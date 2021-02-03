import React from 'react';
import {NavList} from './const'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <ul className='menu'>
            {NavList.map((item) => {
                return (
                    <li className='menu__item'>
                        <Link to='/'  className='menu__link'>{item}</Link>                        
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav;
