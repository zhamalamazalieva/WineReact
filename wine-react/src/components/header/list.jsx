import React from 'react';
import {List} from './const';
import {Link} from 'react-router-dom';
import Login from './login';
import Register from './register';



const HeaderList = () => {
    const [activeLogin, setActiveLogin] = React.useState(false);  
    const [activeRegister, setActiveRegister] = React.useState(false);  
  return (
      <>
      {activeLogin && (
          <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin}/>
      )}
      {activeRegister && (
          <Register activeRegister={activeRegister} setActiveRegister={setActiveRegister}/>
      )}
      <ul className='list header__list'>
                {List.map((item, index) => {
                    return (
                        <li className='list__item'
                            onClick={() => {
                                switch (index) {
                                    case 0:
                                        setActiveLogin(true)
                                        break;
                                    case 1:
                                        setActiveRegister(true)
                                    default:
                                        break;
                                }
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
