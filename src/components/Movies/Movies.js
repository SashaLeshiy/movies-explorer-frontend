import React, { useEffect } from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader';


function Movies({ setMovies,
      movies,
      savedMovies,
      savedMoviesPage,
      isValid,
      setIsValid,
      errors,
      setIsSearch,
      isSearch,
      setSearchPhrase,
      searchPhrase,
      searchWord,
      setSearchMovie,
      searchMovie,
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
      createMovie,
      arrayLikeMovieId,
      handleChangeSearchPhrase,
      handlerCheckBox,
      setHeartRed,
      isHeartRed,
      setIndex,
      index,
      setButtonMore,
      buttonMore,
      indexByWidth,
      movieSearch,
      handleSearchSubmit,
      searchSubmitAndCheck,
      setSearchSavedMovies,
      searchSavedMovies,
      setSavedMovies

}) {
      useEffect(() => {
            setSearchPhrase('');
      }, [])

      useEffect(() => {
            setSearchMovie(JSON.parse(localStorage.getItem('searchMovies')));
      }, [setSearchMovie]);

      useEffect(() => {
            if (searchMovie && searchMovie.length === 0) {
                  setSearchMessage('Ничего не найдено!')
            } else {
                  setSearchMessage('');
            }
      }, [searchMovie])

      return (
            (<section className="movies">
                  <div className="movies__content content">
                        <SearchForm
                              movies={movies}
                              isValid={isValid}
                              setIsValid={setIsValid}
                              errors={errors}
                              setSearchPhrase={setSearchPhrase}
                              searchPhrase={searchPhrase}
                              searchWord={searchWord}
                              setSearchMovie={setSearchMovie}
                              searchMovie={searchMovie}
                              isSearch={isSearch}
                              setIsSearch={setIsSearch}
                              setSearchMessage={setSearchMessage}
                              setNewSearchMovie={setNewSearchMovie}
                              newSearchMovie={newSearchMovie}
                              setIsCheckBox={setIsCheckBox}
                              isCheckBox={isCheckBox}
                              handleChangeSearchPhrase={handleChangeSearchPhrase}
                              handlerCheckBox={handlerCheckBox}
                              setButtonMore={setButtonMore}
                              indexByWidth={indexByWidth}
                              movieSearch={movieSearch}
                              setIsLoading={setIsLoading}
                              isLoading={isLoading}
                              handleSearchSubmit={handleSearchSubmit}
                              searchSubmitAndCheck={searchSubmitAndCheck}
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
                              setIsLoading={setIsLoading}
                              setSavedMovies={setSavedMovies}
                              searchMovie={searchMovie}
                              setSearchMovie={setSearchMovie}
                              setSearchPhrase={setSearchPhrase}
                              earchPhrase={searchPhrase}
                              handleMore={handleMore}
                              createMovie={createMovie}
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
                              setSearchSavedMovies={setSearchSavedMovies}
                              searchSavedMovies={searchSavedMovies}
                        />
                  </div>
            </section>)
      );
}
export default Movies;