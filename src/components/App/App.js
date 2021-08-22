import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('logged')));
  const [currentUser, setCurrentUser] = useState({});
  const [isMobileMenu, setMobileMenuPopupOpen] = useState(false);
  const [savedMoviesPage, setSavedMoviesPage] = useState(JSON.parse(localStorage.getItem('savedMoviePage')));
  const [headlessPage, setHeadlessPage] = useState(false);
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovie')) || []);
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
  const [searchPhrase, setSearchPhrase] = useState(localStorage.getItem('searchPhrase') || '');
  const [searchMovie, setSearchMovie] = useState(JSON.parse(localStorage.getItem('searchMovie')) || []);
  const [searchMessage, setSearchMessage] = useState('');
  const [newSearchMovie, setNewSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(true);
  const [arrayLikeMovieId, setArrayLikeMovieId] = useState([]);
  const [index, setIndex] = useState(null);
  const [buttonMore, setButtonMore] = useState(true);
  const [searchSavedMovies, setSearchSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovie')));

  console.log(searchSavedMovies);

  function indexByWidth() {
    if (window.innerWidth >= 1158) {
      setIndex(3);
    } else if (window.innerWidth >= 882) {
      setIndex(2);
    } else if (window.innerWidth >= 666) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }

  useEffect(() => {
    tokenCheck();
    indexByWidth();
  }, [])

  useEffect(() => {
    searchSubmitAndCheck();
  }, [isCheckBox]);


  function handlerCheckBox() {
    setIsCheckBox((isCheckBox) => !isCheckBox);
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    getUserInfo();
    getSavedMovies();

    getMovieFromApi();
    setLoggedIn(true);
    localStorage.setItem('isCheck', false)
  }

  function getMovieFromApi() {
    moviesApi.getMovies()
      .then((data) => {
        localStorage.setItem('movies', JSON.stringify(data));
        setMovies(data);
      })
      .catch((err) => {
        setSearchMessage('Что-то пошло не так...');
        console.log(err);
      })
  }

  function showLoader() {
    setIsLoading(false);
  }

  function getSavedMovies() {
    let movOwner = [];
    mainApi.getSavedMovie()
      .then((res) => {
        res.map((mov) => {
          movOwner.push(mov.movieId);
        })
        localStorage.setItem('savedMovie', JSON.stringify(res));
        setSavedMovies(res);
        setSearchSavedMovies(res);
      })
      .then(() => {
        setArrayLikeMovieId(movOwner);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (isValid) {
      // localStorage.setItem('searchPhrase', searchPhrase);
      searchSubmitAndCheck();
    }
  }

  function searchSubmitAndCheck() {
    if (!savedMoviesPage) {
      // localStorage.setItem('searchPhrase', searchPhrase);
      movieSearch();
      setButtonMore(true);
      indexByWidth();
      setIsValid(false);
    } else if (savedMoviesPage) {
      savedMovieSearch();
      setIsValid(false);
    }
    setSearchMessage('');
  }

  function movieSearch() {
    localStorage.setItem('searchPhrase', searchPhrase);
    let newMovie = [];
    if (movies && searchPhrase) {
      movies.map((movie) => {
        let nameRU = movie.nameRU.toLowerCase();
        if (isCheckBox && nameRU.includes(searchPhrase.toLowerCase())) {
          newMovie.push(movie);
        } else if (!isCheckBox && nameRU.includes(searchPhrase.toLowerCase())
          && movie.duration >= 40) {
          newMovie.push(movie);
        }
      })
      if (newMovie.length === 0) {
        console.log('ошибка');
        setSearchMessage('Ничего не найдено!')
      }
      localStorage.setItem('searchMovies', JSON.stringify(newMovie));
      setSearchMovie(newMovie);
    }
    //   setTimeout(showLoader, 1500);
  }

  function savedMovieSearch() {
    setSearchSavedMovies([]);
    setIsSearch(true);
    let newMovie = [];
    if (savedMovies) {
      console.log(searchPhrase);
      savedMovies.filter((movie) => {
        let nameRU = movie.nameRU.toLowerCase();
        if (isCheckBox && nameRU.includes(searchPhrase.toLowerCase())) {
          // setSearchSavedMovies([...searchSavedMovies, movie])
          newMovie.push(movie);
        } else if (!isCheckBox && nameRU.includes(searchPhrase.toLowerCase())
          && movie.duration >= 40) {
          // setSearchSavedMovies([...searchSavedMovies, movie])
          newMovie.push(movie);
        }
      })
      if (newMovie.length === 0) {
        console.log('ошибка');
        setSearchMessage('Ничего не найдено!')
      }
      localStorage.setItem('searchSavedMovies', JSON.stringify(newMovie));
      // setSavedMovies(newMovie);
      setSearchSavedMovies(newMovie);
      // setTimeout(showLoader, 1000);
      setSearchPhrase('');
    }
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
    setErrors(target.validationMessage);
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

  function onLogin(data) {
    mainApi.authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck();
          localStorage.setItem('logged', true);
          setIsLoading(false);
          setSavedMoviesPage(false);
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setResError(true);
      });
    setLoggedIn(true);
    setErrors('');
    linkToMovies();
  };

  function createMovie(props) {
    if (!props.trailer
      .match(/^(http|https):\/\/(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w\-._~:/?#[\]@!$&'()*+,;=]*)*#?$/)) {
      props.trailer = 'https://www.youtube.com/';
    }
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
    setSearchMessage('');
    setErrors('');
    history.push('/');
  }

  function linkToProfile() {
    localStorage.setItem('savedMoviePage', false);
    setMobileMenuPopupOpen(false);
    setMainPage(false);
    history.push('/profile');
  }

  function linkToMovies() {
    setHeadlessPage(false);
    setSavedMoviesPage(false);
    localStorage.setItem('savedMoviePage', false);
    setMobileMenuPopupOpen(false);
    setMainPage(false);
    setIsLoading(false);
    setSearchMessage('');
    setErrors('');
    history.push('/movies');
  }

  function linkToSavedMovies() {
    setSavedMoviesPage(true);
    localStorage.setItem('savedMoviePage', true);
    setMobileMenuPopupOpen(false);
    setSearchMessage('');
    setMainPage(false);
    setErrors('');
    history.push('/saved-movies');

  }

  function linkToRegister() {
    localStorage.setItem('savedMoviePage', false);
    setHeadlessPage(true);
    resetForm();
    history.push('/signup');
  }

  function linkToLogin() {
    localStorage.setItem('savedMoviePage', false);
    setHeadlessPage(true);
    history.push('/signin');
  }

  function linkToSignOut() {
    localStorage.clear();
    setSearchMessage('');
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
          location={location}
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
            // handleChange={handleChange}
            // setErrors={setErrors}
            errors={errors}
            isValid={isValid}
            setIsValid={setIsValid}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            setSearchPhrase={setSearchPhrase}
            searchPhrase={searchPhrase}
            setSearchMovie={setSearchMovie}
            movieSearch={movieSearch}
            searchMovie={searchMovie}
            // getPhilms={getPhilms}
            setSearchMessage={setSearchMessage}
            searchMessage={searchMessage}
            setNewSearchMovie={setNewSearchMovie}
            newSearchMovie={newSearchMovie}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsCheckBox={setIsCheckBox}
            isCheckBox={isCheckBox}
            createMovie={createMovie}
            // setCurrentUser={setCurrentUser}
            // currentUser={currentUser}
            arrayLikeMovieId={arrayLikeMovieId}
            handleChangeSearchPhrase={handleChangeSearchPhrase}
            handlerCheckBox={handlerCheckBox}
            savedMovies={savedMovies}
            setIndex={setIndex}
            index={index}
            setButtonMore={setButtonMore}
            buttonMore={buttonMore}
            indexByWidth={indexByWidth}
            handleSearchSubmit={handleSearchSubmit}
            searchSubmitAndCheck={searchSubmitAndCheck}
            setSearchSavedMovies={setSearchSavedMovies}
            searchSavedMovies={searchSavedMovies}
          >
          </ProtectedRoute>

          <ProtectedRoute exact path="/saved-movies" component={SavedMovies}
            // setErrors={setErrors}
            errors={errors}
            isValid={isValid}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            setIsValid={setIsValid}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            savedMoviesPage={savedMoviesPage}
            setSavedMoviesPage={setSavedMoviesPage}
            setLoggedIn={setLoggedIn}
            setSearchMessage={setSearchMessage}
            searchMessage={searchMessage}
            getSavedMovies={getSavedMovies}
            setSearchPhrase={setSearchPhrase}
            // setSearchMovie={setSearchMovie}
            searchPhrase={searchPhrase}
            setCheckBox={setIsCheckBox}
            isCheckBox={isCheckBox}
            // setCurrentUser={setCurrentUser}
            // currentUser={currentUser}
            arrayLikeMovieId={arrayLikeMovieId}
            setArrayLikeMovieId={setArrayLikeMovieId}
            // movieSearch={movieSearch}
            handleChangeSearchPhrase={handleChangeSearchPhrase}
            savedMovieSearch={savedMovieSearch}
            handlerCheckBox={handlerCheckBox}
            setSearchSavedMovies={setSearchSavedMovies}
            searchSavedMovies={searchSavedMovies}
            // setHeartRed={setHeartRed}
            // isHeartRed={isHeartRed}
            handleSearchSubmit={handleSearchSubmit}
            searchSubmitAndCheck={searchSubmitAndCheck}
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
