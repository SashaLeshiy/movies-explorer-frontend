import React from 'react';
import logo from '../../images/logo_svg.svg';
import Navigation from '../Navigation/Navigation';

function Header({ linkToMovies }) {
      return (
            (<header className="header">
                  <div className="content flex">
                        <a href="/" target="_self" className="header__logo">
                              <img src={logo} alt="логотип Diploma" />
                        </a>
                        <Navigation linkToMovies={linkToMovies}/>
                  </div>
            </header>)
      );
}
export default Header;