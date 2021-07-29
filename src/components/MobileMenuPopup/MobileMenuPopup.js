import React from 'react';
import account from '../../images/account_icon.svg';

function MobileMenuPopup({ linkToMovies, linkToSavedMovies, isMobileMenu, closeMobileMenu }) {
    return (
        <div className={`mobileMenu ${isMobileMenu ? "mobileMenu__open" : ""}`}>
            <div className="mobileMenu__container">
                <button onClick={closeMobileMenu} className="mobileMenuClose"></button>
                <ul className="mobileMenu__list">
                    <li className="mobileMenu__list mobileMenu__list_movies">
                        <button onClick={linkToMovies} className="button">Главная</button>
                        <button onClick={linkToMovies} className="button">Фильмы</button>
                        <button onClick={linkToSavedMovies} className="button">Сохраненные фильмы</button>
                    </li>
                    <li className="mobileMenu__list mobileMenu__list_movies_account">
                        <button className="button">Аккаунт</button>
                        <button className="button_account"><img src={account} alt="иконка аккаунта" /></button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default MobileMenuPopup;