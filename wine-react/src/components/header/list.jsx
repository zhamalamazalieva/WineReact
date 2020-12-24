import React from 'react';
import {List} from './const';
import {Link} from 'react-router-dom';



const HeaderList = () => {
  return (
      <ul className='list header__list'>
                {List.map((item) => {
                    return (
                        <li className='list__item'>
                            <Link className='list__link' to={item.link}>
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    );
            })}
      </ul>
  );

};

export default HeaderList;
