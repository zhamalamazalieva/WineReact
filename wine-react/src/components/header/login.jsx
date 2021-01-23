import React from 'react'

const Login = () => {
    return (
        <div className="modal__wrapper">
            <div className="modal">
            <h2 className="modal__title">Login</h2>
            <form action="" className="login__form">
                                        <div className="login__img-container">                                       
                                            <span className="login__closebtn" onclick="closeLogin()">&times;</span>
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
                                            <button type="submit" className="login__button btn--orange btn">Login</button>
                                            <label>
                                                <input type="checkbox" checked="checked" name="remember" />
                                                <span className="login__checkbox">Remember me</span>
                                            </label>
                                            <div className="row login__row">
                                                <button type="button" onclick="closeLogin()"
                                                    className="cancelbtn btn--red btn">Cancel</button>
                                                <span className="login__psw">Forgot <a href="#">password?</a></span>
                                            </div>
                                        </div>
                                    </form>
            </div>
        </div>
    )
}

export default Login;
