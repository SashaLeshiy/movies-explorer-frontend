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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
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
  const [profileData, setProfileData] = useState({ name: '', email: '' });
  const [resError, setResError] = useState(false);
  const [mainPage, setMainPage] = useState(false);
  const [profileMessage, setProfileMessage] = useState('');

  function getUserInfo() {
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogin(data) {
    mainApi.authorize(data)
          .then((res) => {
                if (res.token) {
                      localStorage.setItem('token', res.token);
                      tokenCheck();
                      linkToMovies();
                      setLoggedIn(true);
                }
          })
          .catch((err) => {
                setLoggedIn(false);
                setResError(true);
          });
};

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    getUserInfo();
    setLoggedIn(true);
  }

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
    setProfileData({ ...profileData, [event.target.name]: event.target.value });
    setProfileMessage('');
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
    tokenCheck();
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
    setMobileMenuPopupOpen(false);
    setMainPage(true);
    history.push('/');
  }

  function linkToProfile() {
    setMobileMenuPopupOpen(false);
    setMainPage(false);
    history.push('/profile');
  }

  function linkToMovies() {
    history.push('/movies');
    setHeadlessPage(false);
    setSavedMoviesPage(false);
    setMobileMenuPopupOpen(false);
    setMainPage(false);
  }

  function linkToSavedMovies() {
    setSavedMoviesPage(true);
    setMobileMenuPopupOpen(false);
    history.push('/saved-movies');
    setMainPage(false);
  }

  function linkToRegister() {
    setHeadlessPage(true);
    resetForm();
    history.push('/signup');
  }

  function linkToLogin() {
    setHeadlessPage(true);
    history.push('/signin');
  }

  function linkToSignOut() {
    localStorage.removeItem('token');
    setCurrentUser({});
    setLoggedIn(false);
    linkToHome();
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
          linkToRegister={linkToRegister}
          linkToLogin={linkToLogin}
          mainPage={mainPage}
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
              linkToMovies={linkToMovies}
              setLoggedIn={setLoggedIn}
              setCurrentUser={setCurrentUser}
              onLogin={onLogin}
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
              setCurrentUser={setCurrentUser}
              linkToMovies={linkToMovies}
              setLoggedIn={setLoggedIn}
              getUserInfo={getUserInfo}
              tokenCheck={tokenCheck}
              onLogin={onLogin}
            />
          </Route>
          <ProtectedRoute exact path="/movies" component={Movies} loggedIn={loggedIn}
            movies={movies}
            savedMoviesPage={savedMoviesPage}
            setLoggedIn={setLoggedIn}
            handleChange={handleChange}
            errors={errors}
            isValid={isValid}
          >
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" component={SavedMovies} loggedIn={loggedIn}
            movies={savedMovies}
            savedMoviesPage={savedMoviesPage}
            setSavedMoviesPage={setSavedMoviesPage}
            setLoggedIn={setLoggedIn}
          >
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" component={Profile}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            linkToSignOut={linkToSignOut}
            handleChange={handleChange}
            setProfileData={setProfileData}
            profileData={profileData}
            errors={errors}
            isValid={isValid}
            setCurrentUser={setCurrentUser}
            setProfileMessage={setProfileMessage}
            profileMessage={profileMessage}
            setIsValid={setIsValid}
          >
          </ProtectedRoute>
          <Route exact path="/" >
            <Main setMainPage={setMainPage} mainPage={mainPage} />
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
