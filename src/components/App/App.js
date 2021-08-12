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
  const [isSearch, setIsSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);
  const [searсhMessage, setSearchMessage] = useState('');
  const [newSearchMovie, setNewSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [arrayLikeMovieId, setArrayLikeMovieId] = useState([]);
  
  useEffect(() => {
    tokenCheck();
  }, [])

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    getUserInfo();
    // getSavedMovies();
    setLoggedIn(true);
  }

  // useEffect(() => {
  //   if (searchMovie) {
  //     // setSearchMovie(JSON.parse(localStorage.getItem('movies')));
  //     setIsLoading(false);
  //   }
  // }, [searchMovie])

  

  function getPhilms() {
    setIsLoading(true);
    // console.log('гетфилмс', `Чек ${isCheckBox}`);
    moviesApi.getMovies()
      .then((data) => {
        localStorage.setItem('movies', JSON.stringify(data));
        setMovies(data);
      })
      .then(() => {
        movieSearch(JSON.parse(localStorage.getItem('movies')));
      })
      .then(() => {
        setIsLoading(false);
      })  
      .then(() => {
        setSearchMovie(JSON.parse(localStorage.getItem('movies')));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function movieSearch(movieArray) {
    let newMovie = [];
    // console.log('ищем здесь', `Чек ${isCheckBox}`, searchingMovie);
    movieArray.map((movie) => {
      if (isCheckBox && movie.description.includes(searchPhrase)) {
        newMovie.push(movie);
      } else if (!isCheckBox && movie.description.includes(searchPhrase)
        && movie.duration >= 40) {
        newMovie.push(movie);
      }
    })
    if(newMovie.length === 0) { console.log('Ничего не найдено!')}
    localStorage.setItem('movies', JSON.stringify(newMovie));
  }

  function getSavedMovies() {
    let movOwner = [];
    mainApi.getSavedMovie()
      .then((res) => {
        res.map((mov) => {
          movOwner.push(mov.movieId);
        })
        setSavedMovies(res);
      })
      .then(() => {
        setArrayLikeMovieId(movOwner);
    //     setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handlerCheckBox() {
    setIsCheckBox(!isCheckBox);
    // if(searchMovie.length > 0) {
    //   console.log('ищем', `Чек ${isCheckBox}`);
    // getPhilms();
    // } 
  }

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
    setProfileMessage('')
  };

  const handleChangeSearchPhrase = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    setSearchPhrase(event.target.value);
  }

  function getUserInfo() {
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function getSavedMovies() {
  //   let movOwner = [];
  //   mainApi.getSavedMovie()
  //     .then((res) => {
  //       res.map((mov) => {
  //         movOwner.push(mov.movieId);
  //       })
  //       setSavedMovies(res);
  //     })
  //     .then(() => {
  //       setArrayLikeMovieId(movOwner);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  function onLogin(data) {
    mainApi.authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck();
          setIsLoading(false);
          linkToMovies();
          setLoggedIn(true);
          setSavedMoviesPage(false);
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setResError(true);
      });
  };

  function createMovie(props) {
    mainApi.setMovie(props)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );


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
    setSavedMoviesPage(false);
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
    setIsLoading(false);
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
    localStorage.removeItem('movies');
    setIsSearch(false);
    setCurrentUser({});
    setLoggedIn(false);
    setArrayLikeMovieId([]);
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
            setMovies={setMovies}
            savedMoviesPage={savedMoviesPage}
            setLoggedIn={setLoggedIn}
            getSavedMovies={getSavedMovies}
            handleChange={handleChange}
            setErrors={setErrors}
            errors={errors}
            isValid={isValid}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            setSearchPhrase={setSearchPhrase}
            searchPhrase={searchPhrase}
            setSearchMovie={setSearchMovie}
            searchMovie={searchMovie}
            getPhilms={getPhilms}
            setSearchMessage={setSearchMessage}
            searсhMessage={searсhMessage}
            setNewSearchMovie={setNewSearchMovie}
            newSearchMovie={newSearchMovie}
            isLoading={isLoading}
            setIsCheckBox={setIsCheckBox}
            isCheckBox={isCheckBox}
            createMovie={createMovie}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            arrayLikeMovieId={arrayLikeMovieId}
            handleChangeSearchPhrase={handleChangeSearchPhrase}
            handlerCheckBox={handlerCheckBox}
            savedMovies={savedMovies}
            // setHeartRed={setHeartRed}
            // isHeartRed={isHeartRed}
          >
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" component={SavedMovies}
            setErrors={setErrors}
            errors={errors}
            isValid={isValid}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            savedMoviesPage={savedMoviesPage}
            setSavedMoviesPage={setSavedMoviesPage}
            setLoggedIn={setLoggedIn}
            getSavedMovies={getSavedMovies}
            setSearchPhrase={setSearchPhrase}
            setSearchMovie={setSearchMovie}
            searchPhrase={searchPhrase}
            setCheckBox={setIsCheckBox}
            isCheckBox={isCheckBox}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            arrayLikeMovieId={arrayLikeMovieId}
            setArrayLikeMovieId={setArrayLikeMovieId}
            movieSearch={movieSearch}
            handleChangeSearchPhrase={handleChangeSearchPhrase}
            // setHeartRed={setHeartRed}
            // isHeartRed={isHeartRed}
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
