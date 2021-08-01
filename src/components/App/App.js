import React, { useState, useEffect } from 'react';
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
import Error404 from '../Error404/Error404';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMainPage, setMainPage] = useState(true);
  const [isMobileMenu, setMobileMenuPopupOpen] = useState(false);
  const [savedMoviesPage, setSavedMoviesPage] = useState(false);
  const [headlessPage, setHeadlessPage] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {

  setMovies([
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

  setSavedMovies([
    { nameRU: 'В погоне за Бенкси', thumbnail: '/src/images/movie_image.jpg', duration: '1ч50м' },
    { nameRU: 'В погоне за Бенкси', thumbnail: '/src/images/movie_image.jpg', duration: '1ч50м' },
    { nameRU: 'В погоне за Бенкси', thumbnail: '/src/images/movie_image.jpg', duration: '1ч50м' },
  ]);
}, [])

  function handleMobileMenuOpen () {
    setMobileMenuPopupOpen(true);
  }

  function mobileMenuClose () {
    setMobileMenuPopupOpen(false);
  }

  function linkToHome() {
    setHeadlessPage(false);
    setMainPage(true);
    setLoggedIn(false);
    setMobileMenuPopupOpen(false);
    history.push('/');
  }

  function linkToProfile() {
    setMainPage(false);
    setMobileMenuPopupOpen(false);
    history.push('/profile');
  }

  function linkToMovies() {
    setMainPage(false);
    setLoggedIn(true);
    setSavedMoviesPage(false);
    setMobileMenuPopupOpen(false);
    history.push('/movies');
  }

  function linkToSavedMovies() {
    setMainPage(false);
    setSavedMoviesPage(true);
    setLoggedIn(true);
    setMobileMenuPopupOpen(false);
    history.push('/saved-movies');
  }

  function linkToRegister() {
    setMainPage(false);
    setHeadlessPage(true);
    history.push('/signup');
  }

  function linkToLogin() {
    setMainPage(false);
    setHeadlessPage(true);
    history.push('/signin');
  }

  function linkToBack() {
    history.goBack();
  }

  return (
    <div className="page">
      <Header
        linkToMovies={linkToMovies}
        linkToSavedMovies={linkToSavedMovies}
        loggedIn={loggedIn} 
        isMobileMenu={isMobileMenu}
        openMobileMenu={handleMobileMenuOpen}
        linkToHome={linkToHome}
        linkToProfile={linkToProfile}
        headlessPage={headlessPage}
        isMainPage={isMainPage}
        linkToRegister={linkToRegister}
        linkToLogin={linkToLogin}
        />
      <Switch >
        <Route exact path="/signup">
          <Register linkToLogin={linkToLogin} linkToHome={linkToHome} setHeadlessPage={setHeadlessPage}/>
        </Route>
        <Route exact path="/signin" >
          <Login linkToRegister={linkToRegister} linkToHome={linkToHome} setHeadlessPage={setHeadlessPage}/>
        </Route>
        <Route exact path="/movies" >
          <Movies 
          movies={movies} 
          savedMoviesPage={savedMoviesPage} 
          setLoggedIn={setLoggedIn}
          setMainPage={setMainPage}
          />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies 
          movies={savedMovies}
          savedMoviesPage={savedMoviesPage}
          setSavedMoviesPage={setSavedMoviesPage}
          setLoggedIn={setLoggedIn}
          setMainPage={setMainPage}
           />
        </Route>
        <Route exact path="/profile">
          <Profile setLoggedIn={setLoggedIn} setMainPage={setMainPage} />
        </Route>
        <Route exact path="/" component={Main} >
        </Route>
        <Route path="/*" >
          <Error404 setHeadlessPage={setHeadlessPage} linkToBack={linkToBack} />
        </Route>
      </Switch>
      <Footer headlessPage={headlessPage} />
      <MobileMenuPopup 
      isMobileMenu={isMobileMenu} 
      closeMobileMenu={mobileMenuClose}
      linkToMovies={linkToMovies}
      linkToSavedMovies={linkToSavedMovies}
      linkToHome={linkToHome}
      linkToProfile={linkToProfile}
       />
    </div>
  );
}

export default App;
