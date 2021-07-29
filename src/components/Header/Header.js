import React from 'react';
import logo from '../../images/logo_svg.svg';
import Navigation from '../Navigation/Navigation';

function Header({ linkToMovies, linkToSavedMovies, linkToHome, loggedIn, isMobileMenu, openMobileMenu }) {
      return (
            (<header className={`header ${loggedIn ? "header__dark" : ""}`}>
                  <div className="content flex">
                        <img onClick={linkToHome} src={logo} className="header__logo" alt="логотип Diploma" />
                        <Navigation
                              linkToMovies={linkToMovies}
                              linkToSavedMovies={linkToSavedMovies}
                              isMobileMenu={isMobileMenu}
                              openMobileMenu={openMobileMenu}
                        />
                  </div>
            </header>)
      );
}
export default Header;