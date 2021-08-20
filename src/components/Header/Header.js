import React from 'react';
import logo from '../../images/logo_svg.svg';
import Navigation from '../Navigation/Navigation';

function Header({ linkToMovies, 
      linkToSavedMovies, 
      linkToHome, 
      linkToProfile, 
      linkToRegister,
      linkToLogin,
      loggedIn, 
      isMobileMenu, 
      openMobileMenu,
      headlessPage,
      mainPage, location
}) {
      return (
            (<header className={`header ${!mainPage ? "header__dark" : ""} ${headlessPage ? "hidden" : ""}`}>
                  <div className="header__flex content">
                        <img onClick={linkToHome} src={logo} className="header__logo" alt="логотип Diploma" />
                        <Navigation
                              linkToMovies={linkToMovies}
                              linkToSavedMovies={linkToSavedMovies}
                              isMobileMenu={isMobileMenu}
                              openMobileMenu={openMobileMenu}
                              linkToProfile={linkToProfile}
                              linkToRegister={linkToRegister}
                              linkToLogin={linkToLogin}
                              loggedIn={loggedIn}
                              location={location}
                        />
                  </div>
            </header>)
      );
}
export default Header;