import React, { useEffect, useState } from 'react';
import logo from '../../images/logo_svg.svg';
import * as mainApi from '../../utils/MainApi';


function Register({ linkToHome,
      linkToLogin,
      setHeadlessPage,
      handleChange,
      errors,
      isValid,
      registerData,
      setRegisterData, 
      setResError,
      resError,
      linkToMovies,
      setLoggedIn
}) {
           
      function onRegister(data) {
            mainApi.register(data)
                  .then((res) => {
                        setLoggedIn(true);
                        setResError(false);
                        linkToMovies();
                  })
                  .catch((err) => {
                        setResError(true);
                  });
      };

      function handleSubmit(e) {
            e.preventDefault();
            onRegister(registerData);
      }

      useEffect(() => {
            setHeadlessPage(true);
            setRegisterData({ name: '', email: '', password: '' });
            setResError(false);
      }, [ setRegisterData, setHeadlessPage, setResError ]);

      return (
            (<section className="register">
                  <div className="register__container">
                        <img onClick={linkToHome} src={logo} className="register__logo" alt="логотип Diploma" />
                        <h1 className="register__heading">Добро пожаловать!</h1>
                        <form className="register__form" onSubmit={handleSubmit} noValidate>
                              <span className="register__pole">Имя</span>
                              <input type="text"
                                    className="register__input"
                                    name="name"
                                    onChange={handleChange}
                                    value={registerData.name}
                                    minLength="2" maxLength="30" required />
                              <span className="register__form_error">{errors.name}</span>
                              <span className="register__pole">E-mail</span>
                              <input type="email" className="register__input"
                                    name="email" onChange={handleChange}
                                    value={registerData.email}
                                    minLength="2" maxLength="30" required />
                              <span className="register__form_error">{errors.email}</span>
                              <span className="register__pole">Пароль</span>
                              <input type="password" className="register__input"
                                    name="password" onChange={handleChange}
                                    value={registerData.password}
                                    minLength="2" maxLength="30" required />
                              <span className="register__form_error">{errors.password}</span>
                              <span className={`register__error ${resError ? 'register__error_active' : ''}`}>Что-то пошло не так...</span>
                              {isValid ?
                                    <button type="submit" className="register__submit" >Зарегистрироваться</button>
                                    :
                                    <button type="submit" className="register__submit register__submit_unactive" disabled >Зарегистрироваться</button>
                              }
                        </form>
                        <p className="register__logger">Уже зарегистрированы?
                              <button onClick={linkToLogin} className="register__signin" > Войти</button>
                        </p>
                  </div>
            </section>)
      );
}
export default Register;