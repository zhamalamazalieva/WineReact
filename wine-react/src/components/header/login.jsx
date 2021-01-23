import React from "react";
import userAvatar from '../../assets/img/svg/user.svg';
import {BtnLogin}  from '../btns';


const Login = ({setActiveLogin, activeLogin}) => {
  const ModalRef = React.useRef();
  const ModalWrapperRef = React.useRef();
  const handleClickOutSide = (event) => {
    if(!event.path.includes(ModalRef.current)){
      setActiveLogin(false)
    }
  }
  React.useEffect(() => {
    if (ModalWrapperRef.current) {
      ModalWrapperRef.current.addEventListener("click", handleClickOutSide);
    }
  }, [activeLogin]);
  return (
    <div ref={ModalWrapperRef} className="login__wrapper">
      <div ref={ModalRef} className="login">
        <h2 className="login__title">Login</h2>
        <form action="" className="login__form">
          <div className="login__img-container">
                <img src={userAvatar} alt="avatar" />
          </div>
          <div className="login__container">
            <label for="username" className="login__label">
              <span>Username</span>
              <input type="text" className="login__input" />
            </label>
            <label for="password" className="login__label">
              <span>Password</span>
              <input type="password" className="login__input" />
            </label>
            <BtnLogin/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
