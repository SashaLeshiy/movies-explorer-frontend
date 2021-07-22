import React from 'react';
import account from '../../images/account_icon.svg';

function Navigation() {
      return (
            (<ul className="header__menu">
                  <li className="header__button">
                        <button className="button button_signup">Регистрация</button>
                  </li>
                  <li className="header__button">
                        <button className="button button_signin">Войти</button>
                  </li>
                  {/* <li className="header__button header__menu_movies">
                        <button className="button">Фильмы</button>
                        <button className="button">Сохраненные фильмы</button>
                  </li>
                  <li className="header__button header__menu_movies_account">
                        <button className="button">Аккаунт</button>
                        <button className="button_account"><img src={account} alt="иконка аккаунта" /></button>
                  </li> */}
            </ul>)
      );
}
export default Navigation;