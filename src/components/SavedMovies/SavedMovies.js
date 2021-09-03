import React, { useEffect } from 'react';
import MovieCardList from '../Movies/MoviesCardList/MovieCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import { getSavedMovie } from '../../utils/MainApi';

function SavedMovies({
      errors,
      savedMoviesPage,
      setSavedMovies,
      savedMovies,
      getSavedMovies,
      setSearchPhrase,
      searchPhrase,
      setIsCheckBox,
      isCheckBox,
      setIsSearch,
      isSearch,
      arrayLikeMovieId,
      setMovies,
      isValid,
      setIsValid,
      searchWord,
      searchMovie,
      getPhilms,
      setSearchMessage,
      searchMessage,
      handleMore,
      setNewSearchMovie,
      newSearchMovie,
      isLoading,
      setIsLoading,
      createMovie,
      handleChangeSearchPhrase,
      handlerCheckBox,
      setHeartRed,
      movieSearch,
      savedMovieSearch,
      setSearchSavedMovies,
      searchSavedMovies,
      handleSearchSubmit,
      searchSubmitAndCheck,
            
}) {
      useEffect(() => {
            getSavedMovie();
            setSearchPhrase('');
      }, [getSavedMovie]);

      useEffect(() => {
            if(searchSavedMovies.length === 0) {
                setSearchMessage('Ничего не найдено!')
            } else {
                  setSearchMessage('');
            }
        }, [searchSavedMovies]);

      return (
            <section className="savedMovies">
                  <div className="content">
                        <SearchForm
                              isValid={isValid}
                              setIsValid={setIsValid}
                              errors={errors}
                              setSearchPhrase={setSearchPhrase}
                              searchPhrase={searchPhrase}
                              searchWord={searchWord}
                              setSavedMovies={setSavedMovies}
                              setIsSearch={setIsSearch}
                              getPhilms={getPhilms}
                              setSearchMessage={setSearchMessage}
                              searchMessage={searchMessage}
                              setNewSearchMovie={setNewSearchMovie}
                              newSearchMovie={newSearchMovie}
                              setIsCheckBox={setIsCheckBox}
                              isCheckBox={isCheckBox}
                              handleChangeSearchPhrase={handleChangeSearchPhrase}
                              handlerCheckBox={handlerCheckBox}
                              savedMovies={savedMovies}
                              movieSearch={movieSearch}
                              savedMoviesPage={savedMoviesPage}
                              savedMovieSearch={savedMovieSearch}
                              setSearchSavedMovies={setSearchSavedMovies}
                              searchSavedMovies={searchSavedMovies}
                              handleSearchSubmit={handleSearchSubmit}
                              searchSubmitAndCheck={searchSubmitAndCheck}
                        />
                        {isLoading ?
                              <Preloader />
                              :
                              <span></span>
                        }
                        <MovieCardList
                              getSavedMovies={getSavedMovies}
                              savedMovies={savedMovies}
                              setSavedMovies={setSavedMovies}
                              setMovies={setMovies}
                              savedMoviesPage={savedMoviesPage}
                              isSearch={isSearch}
                              setIsSearch={setIsSearch}
                              searchMovie={searchMovie}
                              handleMore={handleMore}
                              createMovie={createMovie}
                              arrayLikeMovieId={arrayLikeMovieId}
                              setHeartRed={setHeartRed}
                              searchMessage={searchMessage}
                              searchSavedMovies={searchSavedMovies}
                              setSearchSavedMovies={setSearchSavedMovies}
                              movieSearch={movieSearch}
                        />
                  </div>
            </section>
      );
}
export default SavedMovies;