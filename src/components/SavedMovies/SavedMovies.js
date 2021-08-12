import React, { useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getSavedMovie } from '../../utils/MainApi';
import MovieCardList from '../Movies/MoviesCardList/MovieCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import * as mainApi from '../../utils/MainApi';

function SavedMovies({ movies,
      errors,
      setErrors,
      setSavedMoviesPage,
      savedMoviesPage,
      setSavedMovies,
      savedMovies,
      getSavedMovies,
      setSearchPhrase,
      searchPhrase,
      setIsCheckBox,
      isCheckBox,
      setCurrentUser,
      currentUser,
      arrayLikeMovieId,
      setArrayLikeMovieId,
      setMovies,
      handleChange,
      isValid,
      setIsSearch,
      isSearch,
      searchWord,
      setSearchMovie,
      searchMovie,
      getPhilms,
      setSearchMessage,
      searchMessage,
      handleMore,
      setNewSearchMovie,
      newSearchMovie,
      isLoading,
      compareMovies,
      createMovie,
      handleChangeSearchPhrase,
      handlerCheckBox,
      setHeartRed,
      movieSearch
}) {

      useEffect(() => {
            getSavedMovies();
      }, []);

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

      return (
            <section className="savedMovies">
                  <div className="content">
                        <SearchForm
                              handleChange={handleChange}
                              isValid={isValid}
                              errors={errors}
                              setErrors={setErrors}
                              setSearchPhrase={setSearchPhrase}
                              searchPhrase={searchPhrase}
                              searchWord={searchWord}
                              setSearchMovie={setSearchMovie}
                              setSavedMovies={setSavedMovies}
                              searchMovie={searchMovie}
                              setMovies={setMovies}
                              isSearch={isSearch}
                              setIsSearch={setIsSearch}
                              movies={movies}
                              getPhilms={getPhilms}
                              setSearchMessage={setSearchMessage}
                              searchMessage={searchMessage}
                              setNewSearchMovie={setNewSearchMovie}
                              newSearchMovie={newSearchMovie}
                              setIsCheckBox={setIsCheckBox}
                              isCheckBox={isCheckBox}
                              compareMovies={compareMovies}
                              handleChangeSearchPhrase={handleChangeSearchPhrase}
                              handlerCheckBox={handlerCheckBox}
                              savedMovies={savedMovies}
                              movieSearch={movieSearch}
                              savedMoviesPage={savedMoviesPage}
                        />
                        <MovieCardList
                              getSavedMovies={getSavedMovies}
                              savedMovies={savedMovies}
                              setSavedMovies={setSavedMovies}
                              setMovies={setMovies}
                              savedMoviesPage={savedMoviesPage}
                              isValid={isValid}
                              isSearch={isSearch}
                              searchMovie={searchMovie}
                              handleMore={handleMore}
                              createMovie={createMovie}
                              setCurrentUser={setCurrentUser}
                              currentUser={currentUser}
                              arrayLikeMovieId={arrayLikeMovieId}
                              setHeartRed={setHeartRed}
                        />
                  </div>
            </section>
      );
}
export default SavedMovies;