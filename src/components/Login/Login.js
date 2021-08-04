import React, { useEffect } from 'react';
import logo from '../../images/logo_svg.svg';
import * as mainApi from '../../utils/MainApi';

function Login({ linkToHome,
      linkToRegister,
      setHeadlessPage,
      handleChange,
      errors,
      isValid,
      loginData,
      setLoginData,
      setResError,
      resError,
      setCurrentUser,
      linkToMovies,
      setLoggedIn
}) {

      function getUserInfo() {
            mainApi.getUserInfo()
                  .then((res) => {
                        setCurrentUser(res);
                  })
                  .catch((err) => {
                        console.log(err);
                  });
      }

      function onLogin(data) {
            mainApi.authorize(data)
                  .then((res) => {
                        if (res.token) {
                              localStorage.setItem('token', res.token);
                              getUserInfo();
                        }
                  })
                  .catch((err) => {
                        setResError(true);
                  });
      };

      function handleSubmit(event) {
            event.preventDefault();
            onLogin(loginData);
            linkToMovies();
            setLoggedIn(true);
      }

      useEffect(() => {
            setHeadlessPage(true);
            setLoginData({ email: '', password: '' });
      }, [setHeadlessPage, setLoginData]);
      return (
            (<section className="login">
                  <div className="login__container">
                        <img onClick={linkToHome} src={logo} className="login__logo" alt="логотип Diploma" />
                        <h1 className="login__heading">Рады видеть!</h1>
                        <form className="login__form" onSubmit={handleSubmit} noValidate>
                              <span className="login__pole">E-mail</span>
                              <input type="email" className="login__input"
                                    name="email" onChange={handleChange}
                                    value={loginData.email}
                                    minLength="2" maxLength="30" required />
                              <span className="login__form_error">{errors.email}</span>
                              <span className="login__pole">Пароль</span>
                              <input type="password" className="login__input"
                                    onChange={handleChange} value={loginData.password}
                                    name="password" required />
                              <span className="login__form_error">{errors.password}</span>
                              <span className={`login__error ${resError ? 'login__error_active' : ''}`}>Что-то пошло не так...</span>
                              {isValid ?
                                    <button type="submit" className="login__submit" >Войти</button>
                                    :
                                    <button type="submit" className="login__submit login__submit_unactive" disabled>Войти</button>
                              }
                        </form>
                        <p className="login__logger">Ещё не зарегистрированы?
                              <button onClick={linkToRegister} className="login__signin" > Регистрация</button>
                        </p>
                  </div>
            </section>)
      );
}
export default Login;