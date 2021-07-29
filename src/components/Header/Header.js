import React from 'react';
import logo from '../../images/logo_svg.svg';
import Navigation from '../Navigation/Navigation';

function Header({ linkToMovies, linkToSavedMovies, loggedIn, isMobileMenu, openMobileMenu }) {
      return (
            (<header className={`header ${loggedIn ? "header__dark" : ""}`}>
                  <div className="content flex">
                        <a href="/" target="_self" className="header__logo">
                              <img src={logo} alt="логотип Diploma" />
                        </a>
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