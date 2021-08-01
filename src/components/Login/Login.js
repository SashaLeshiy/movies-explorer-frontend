import React, {useEffect } from 'react';
import logo from '../../images/logo_svg.svg';

function Login({ linkToHome, linkToRegister, setHeadlessPage }) {
      useEffect(() => {
            setHeadlessPage(true);
      });
      return (
            (<section className="login">
                  <div className="login__container">
                        <img onClick={linkToHome} src={logo} className="login__logo" alt="логотип Diploma" />
                        <h1 className="login__heading">Рады видеть!</h1>
                        <form className="login__form">
                              <span className="login__pole">E-mail</span>
                              <input type="email" className="login__input"
                                    name="email"
                                    minLength="2" maxLength="30" required />
                              <span className="login__pole">Пароль</span>
                              <input type="password" className="login__input"
                                    name="password" required />
                              <span className="login__error">Что-то пошло не так...</span>      
                              <button type="submit" className="login__submit" >Войти</button>
                        </form>
                        <p className="login__logger">Ещё не зарегистрированы?
                              <button onClick={linkToRegister} className="login__signin" > Регистрация</button>
                        </p>
                  </div>
            </section>)
      );
}
export default Login;