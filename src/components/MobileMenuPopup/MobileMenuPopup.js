import React from 'react';
import account from '../../images/account_icon.svg';

function MobileMenuPopup({ linkToMovies, linkToSavedMovies, linkToHome, isMobileMenu, closeMobileMenu }) {
    return (
        <div className={`mobileMenu ${isMobileMenu ? "mobileMenu__open" : ""}`}>
            <div className="mobileMenu__container">
                <button onClick={closeMobileMenu} className="mobileMenuClose"></button>
                <ul className="mobileMenu__list">
                    <li className="mobileMenu__list_movies">
                        <button onClick={linkToHome} className="mobileMenu__button">Главная</button>
                        <button onClick={linkToMovies} className="mobileMenu__button">Фильмы</button>
                        <button onClick={linkToSavedMovies} className="mobileMenu__button">Сохраненные фильмы</button>
                    </li>
                    <li className="mobileMenu__list_movies_account">
                        <button className="mobileMenu__button">Аккаунт</button>
                        <button className="button_account"><img src={account} alt="иконка аккаунта" /></button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default MobileMenuPopup;