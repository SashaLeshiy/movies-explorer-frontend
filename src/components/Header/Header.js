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
      isMainPage
}) {
      return (
            (<header className={`header ${loggedIn ? "header__dark" : ""} ${headlessPage ? "hidden" : ""}`}>
                  <div className="content flex">
                        <img onClick={linkToHome} src={logo} className="header__logo" alt="логотип Diploma" />
                        <Navigation
                              linkToMovies={linkToMovies}
                              linkToSavedMovies={linkToSavedMovies}
                              isMobileMenu={isMobileMenu}
                              openMobileMenu={openMobileMenu}
                              linkToProfile={linkToProfile}
                              isMainPage={isMainPage}
                              linkToRegister={linkToRegister}
                              linkToLogin={linkToLogin}
                        />
                  </div>
            </header>)
      );
}
export default Header;