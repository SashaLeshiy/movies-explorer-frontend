import React, { useEffect, useState } from 'react';
import logo from '../../images/logo_svg.svg';

function Register({ linkToHome, linkToLogin, setHeadlessPage }) {
      useEffect(() => {
            setHeadlessPage(true);
      });

      const [values, setValues] = useState({});
      const [errors, setErrors] = useState('');
      const [isValid, setIsValid] = useState(false);

      const handleChange = (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.value;
            setValues({ ...values, [name]: value });
            setErrors(target.validationMessage);
            setIsValid(target.closest("form").checkValidity());
            console.log(isValid);
      };


      return (
            (<section className="register">
                  <div className="register__container">
                        <img onClick={linkToHome} src={logo} className="register__logo" alt="логотип Diploma" />
                        <h1 className="register__heading">Добро пожаловать!</h1>
                        <form className="register__form">
                              <span className="register__pole">Имя</span>
                              <input type="text" className="register__input"
                                    name="name" onChange={handleChange}
                                    minLength="2" maxLength="30" required />
                              <span className="register__error">{errors}</span>
                              <span className="register__pole">E-mail</span>
                              <input type="email" className="register__input"
                                    name="email" onChange={handleChange}
                                    minLength="2" maxLength="30" required />
                              <span className="register__error">{errors}</span>
                              <span className="register__pole">Пароль</span>
                              <input type="password" className="register__input"
                                    name="password" onChange={handleChange} required />
                              <span className="register__error">{errors}</span>
                              <span className="register__error">Что-то пошло не так...</span>
                              <button type="submit" className="register__submit" >Зарегистрироваться</button>
                        </form>
                        <p className="register__logger">Уже зарегистрированы?
                              <button onClick={linkToLogin} className="register__signin" > Войти</button>
                        </p>
                  </div>
            </section>)
      );
}
export default Register;