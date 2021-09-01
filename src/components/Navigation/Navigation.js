import React from 'react';
import account from '../../images/account_icon.svg';

function Navigation({ linkToMovies, 
      linkToSavedMovies, 
      linkToProfile, 
      linkToRegister,
      linkToLogin,
      isMainPage, 
      openMobileMenu,
      loggedIn, 
      location
 }) {
           
      return (
            (<ul className="header__menu">
                  {!loggedIn ?
                        <>
                              <li className="header__button">
                                    <button onClick={linkToRegister} className="button button_signup">Регистрация</button>
                              </li>
                              <li className="header__button">
                                    <button onClick={linkToLogin} className="button button_signin">Войти</button>
                              </li>
                        </>
                        :
                        <>
                              <li className="header__button header__menu_movies">
                                    <button onClick={linkToMovies} className={`button ${location.pathname === '/movies' ? "button__active" : ""}`}>Фильмы</button>
                                    <button onClick={linkToSavedMovies} className={`button ${location.pathname === '/saved-movies' ? "button__active" : ""}`}>Сохраненные фильмы</button>
                              </li>
                              <li className="header__button header__menu_movies_account">
                                    <button onClick={linkToProfile} className="button">Аккаунт</button>
                                    <button className="button_account"><img src={account} alt="иконка аккаунта" /></button>
                              </li>
                              <li onClick={openMobileMenu} className="header__menu_mobile">
                                    <span></span>
                              </li>
                        </>
                  }
            </ul>)
      );
}
export default Navigation;