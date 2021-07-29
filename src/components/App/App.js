import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import MobileMenuPopup from '../MobileMenuPopup/MobileMenuPopup';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMobileMenu, setMobileMenuPopupOpen] = useState(false);
  const [savedMoviesPage, setSavedMoviesPage] = useState(false);
  const [movies, setMovies] = useState([
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
    { nameRU: '33 слова о дизайне', thumbnail: '/src/images/movie_image.jpg', duration: '1ч42м' },
  ]);

  const [savedMovies, setSavedMovies] = useState([
    { nameRU: 'В погоне за Бенкси', thumbnail: '/src/images/movie_image.jpg', duration: '1ч50м' },
    { nameRU: 'В погоне за Бенкси', thumbnail: '/src/images/movie_image.jpg', duration: '1ч50м' },
    { nameRU: 'В погоне за Бенкси', thumbnail: '/src/images/movie_image.jpg', duration: '1ч50м' },

  ]);

  function handleMobileMenuOpen () {
    setMobileMenuPopupOpen(true);
  }

  function mobileMenuClose () {
    setMobileMenuPopupOpen(false);
  }

  function linkToMovies() {
    setLoggedIn(true);
    setSavedMoviesPage(false);
    history.push('/movies');
  }

  function linkToSavedMovies() {
    setSavedMoviesPage(true);
    setLoggedIn(true);
    history.push('/saved-movies');
  }

  return (
    <div className="page">
      <Header
        linkToMovies={linkToMovies}
        linkToSavedMovies={linkToSavedMovies}
        loggedIn={loggedIn} 
        isMobileMenu={isMobileMenu}
        openMobileMenu={handleMobileMenuOpen}
        />
      <Switch >
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin" >
          <Login />
        </Route>
        <Route exact path="/movies" >
          <Movies movies={movies} savedMoviesPage={savedMoviesPage} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies movies={savedMovies} savedMoviesPage={savedMoviesPage} />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/" component={Main} >
        </Route>
      </Switch>
      <Footer />
      <MobileMenuPopup isMobileMenu={isMobileMenu} closeMobileMenu={mobileMenuClose} />
    </div>
  );
}

export default App;
