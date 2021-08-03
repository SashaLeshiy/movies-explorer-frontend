import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { moviesApi } from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
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
  const [currentUser, setCurrentUser] = useState({});
  const [isMainPage, setMainPage] = useState(true);
  const [isMobileMenu, setMobileMenuPopupOpen] = useState(false);
  const [savedMoviesPage, setSavedMoviesPage] = useState(false);
  const [headlessPage, setHeadlessPage] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [resError, setResError] = useState(false);



  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    setRegisterData({ ...registerData, [event.target.name]: event.target.value });
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };


  function getPhilms() {
    moviesApi.getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    getPhilms();
  }, [])

  function handleMobileMenuOpen() {
    setMobileMenuPopupOpen(true);
  }

  function mobileMenuClose() {
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
    resetForm();
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
      <CurrentUserContext.Provider value={currentUser}>
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
            <Register
              linkToLogin={linkToLogin}
              linkToHome={linkToHome}
              setHeadlessPage={setHeadlessPage}
              handleChange={handleChange}
              values={values}
              errors={errors}
              isValid={isValid}
              registerData={registerData}
              setRegisterData={setRegisterData}
              setResError={setResError}
              resError={resError}
            />
          </Route>
          <Route exact path="/signin" >
            <Login linkToRegister={linkToRegister}
              linkToHome={linkToHome}
              setHeadlessPage={setHeadlessPage}
              handleChange={handleChange}
              errors={errors}
              isValid={isValid}
              loginData={loginData}
              setLoginData={setLoginData}
              setResError={setResError}
              resError={resError}
            />
          </Route>
          <Route exact path="/movies" >
            <Movies
              movies={movies}
              savedMoviesPage={savedMoviesPage}
              setLoggedIn={setLoggedIn}
              setMainPage={setMainPage}
              handleChange={handleChange}
              errors={errors}
              isValid={isValid}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
