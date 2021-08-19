import React, { useEffect, useState } from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader';


function Movies({ setMovies,
      movies,
      savedMovies,
      savedMoviesPage,
      // handleChange,
      isValid,
      setIsValid,
      // errors,
      // setErrors,
      setIsSearch,
      isSearch,
      setSearchPhrase,
      searchPhrase,
      searchWord,
      // setSearchMovie,
      // searchMovie,
      // getPhilms,
      getSavedMovies,
      setSearchMessage,
      searchMessage,
      handleMore,
      setNewSearchMovie,
      newSearchMovie,
      isLoading,
      setIsLoading,
      isCheckBox,
      setIsCheckBox,
      // compareMovies,
      createMovie,
      //setCurrentUser,
      //currentUser,
      arrayLikeMovieId,
      // handleChangeSearchPhrase,
      handlerCheckBox,
      setHeartRed,
      isHeartRed,
      setIndex,
      index,
      setButtonMore,
      buttonMore,
      indexByWidth,
      // movieSearch

}) {

      // const [searchPhrase, setSearchPhrase] = useState(null);
      const [values, setValues] = useState({});
      const [errors, setErrors] = useState('');
      const [searchMovie, setSearchMovie] = useState([]);

      useEffect(() => {
            setSearchPhrase(localStorage.getItem('searchPhrase'));
      }, [])

      useEffect(() => {
            if (movies) {
                  // setSearchPhrase(localStorage.getItem('searchPhrase'));
                  movieSearch()
                  setSearchMessage('');
            };
      }, [movies]);

      function movieSearch() {
            setIsLoading(true);
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
            setIsLoading(false);
      }



      const handleChangeSearchPhrase = (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.value;
            setValues({ ...values, [name]: value });
            setErrors(target.validationMessage);
            setIsValid(target.closest("form").checkValidity());
            setSearchPhrase(event.target.value);
      }


      return (
            (<section className="movies">
                  <div className="movies__content content">
                        <SearchForm
                              movies={movies}
                              // handleChange={handleChange}
                              isValid={isValid}
                              setIsValid={setIsValid}
                              errors={errors}
                              // setErrors={setErrors}
                              setSearchPhrase={setSearchPhrase}
                              searchPhrase={searchPhrase}
                              searchWord={searchWord}
                              setSearchMovie={setSearchMovie}
                              searchMovie={searchMovie}
                              // setMovies={setMovies}
                              isSearch={isSearch}
                              setIsSearch={setIsSearch}
                              // movies={movies}
                              // getPhilms={getPhilms}
                              setSearchMessage={setSearchMessage}
                              // searchMessage={searchMessage}
                              setNewSearchMovie={setNewSearchMovie}
                              newSearchMovie={newSearchMovie}
                              setIsCheckBox={setIsCheckBox}
                              isCheckBox={isCheckBox}
                              // compareMovies={compareMovies}
                              handleChangeSearchPhrase={handleChangeSearchPhrase}
                              handlerCheckBox={handlerCheckBox}
                              // setIndex={setIndex}
                              // index={index}
                              setButtonMore={setButtonMore}
                              // buttonMore={buttonMore}
                              indexByWidth={indexByWidth}
                              movieSearch={movieSearch}
                              setIsLoading={setIsLoading}
                              isLoading={isLoading}
                        />
                        {isLoading ?
                              <Preloader />
                              :
                              <span></span>
                        }
                        <MovieCardList setMovies={setMovies}
                              getSavedMovies={getSavedMovies}
                              savedMovies={savedMovies}
                              savedMoviesPage={savedMoviesPage}
                              // isValid={isValid}
                              // isSearch={isSearch}
                              searchMovie={searchMovie}
                              setSearchMovie={setSearchMovie}
                              setSearchPhrase={setSearchPhrase}
                              earchPhrase={searchPhrase}
                              handleMore={handleMore}
                              createMovie={createMovie}
                              // setCurrentUser={setCurrentUser}
                              // currentUser={currentUser}
                              setSearchMessage={setSearchMessage}
                              arrayLikeMovieId={arrayLikeMovieId}
                              setHeartRed={setHeartRed}
                              isHeartRed={isHeartRed}
                              setIndex={setIndex}
                              index={index}
                              setButtonMore={setButtonMore}
                              buttonMore={buttonMore}
                              searchMessage={searchMessage}
                              movieSearch={movieSearch}
                        />
                  </div>
            </section>)
      );
}
export default Movies;