import React from 'react';
import account from '../../images/account_icon.svg';
import burger from '../../images/burger_icon.svg';

function Navigation({ linkToMovies, linkToSavedMovies }) {
      return (
            (<ul className="header__menu">
                  {/* <li className="header__button">
                        <button className="button button_signup">Регистрация</button>
                  </li>
                  <li className="header__button">
                        <button className="button button_signin">Войти</button>
                  </li> */}
                  <li className="header__button header__menu_movies">
                        <button onClick={linkToMovies} className="button">Фильмы</button>
                        <button onClick={linkToSavedMovies} className="button">Сохраненные фильмы</button>
                  </li>
                  <li className="header__button header__menu_movies_account">
                        <button className="button">Аккаунт</button>
                        <button className="button_account"><img src={account} alt="иконка аккаунта" /></button>
                  </li>
                  <li className="header__menu_mobile">
                        <img src={burger} alt="иконка бургер" />
                  </li>
            </ul>)
      );
}
export default Navigation;