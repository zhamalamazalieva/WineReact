import React from "react";
import userAvatar from '../../assets/img/svg/user.svg';
import {BtnRegister}  from '../btns';


const Register = ({setActiveRegister, activeRegister}) => {
  const ModalRef = React.useRef();
  const ModalWrapperRef = React.useRef();
  const handleClickOutSide = (event) => {
    if(!event.path.includes(ModalRef.current)){
      setActiveRegister(false)
    }
  }
  React.useEffect(() => {
    if (ModalWrapperRef.current) {
      ModalWrapperRef.current.addEventListener("click", handleClickOutSide);
    }
  }, [activeRegister]);
  return (
    <div ref={ModalWrapperRef} className="login__wrapper">
      <div ref={ModalRef} className="login">
        <h2 className="login__title">Register</h2>
        <form action="" className="login__form">
          {/* <div className="login__img-container">
                <img src={userAvatar} alt="avatar" />
          </div> */}
          <div className="login__container">
            <label for="username" className="login__label">
              <input type="text" className="login__input" placeholder="First name"/>
              <span>First Name</span>
            </label>
             <label for="usersurname" className="login__label">
              <input type="text" className="login__input" placeholder="Surname"/>
              <span>Surname</span>
            </label>
            <label for="text" className="login__label">
              <input type="email" className="login__input" placeholder="Email"/>
              <span>Email</span>
            </label>
            <label for="password" className="login__label">
              <input type="password" className="login__input" placeholder="Password"/>
              <span>Password</span>
            </label>
            <BtnRegister/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
