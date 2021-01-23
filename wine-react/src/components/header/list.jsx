import React from 'react';
import {List} from './const';
import {Link} from 'react-router-dom';
import Login from './login';



const HeaderList = () => {
    const [activeLogin, setActiveLogin] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState();
   

  return (
      <>
      {activeLogin && (
          <Login/>
      )}
      <ul className='list header__list'>
                {List.map((item, index) => {
                    return (
                        <li className='list__item'
                            onClick={() => {index === 0 ? setActiveLogin(true) : setActiveLogin(false)
                            }}
                        >                           
                            {item.text}
                        </li>
                    );
            })}
      </ul>
      </>
  );

};

export default HeaderList;
