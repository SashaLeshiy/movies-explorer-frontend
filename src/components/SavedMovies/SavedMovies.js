import React, { useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MovieCardList from '../Movies/MoviesCardList/MovieCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

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
}) {

      useEffect(() => {
            getSavedMovies();
      }, []);

      return (
            <section className="savedMovies">
                  <div className="content">
                        <SearchForm
                              setSearchPhrase={setSearchPhrase}
                              searchPhrase={searchPhrase}
                              setErrors={setErrors}
                              errors={errors}
                              setCheckBox={setIsCheckBox}
                              isCheckBox={isCheckBox}
                        />
                        <MovieCardList
                              movies={movies}
                              savedMoviesPage={savedMoviesPage}
                              setSavedMovies={setSavedMovies}
                              savedMovies={savedMovies}
                              getSavedMovies={getSavedMovies}
                              setCurrentUser={setCurrentUser}
                              currentUser={currentUser}
                        />
                  </div>
            </section>
      );
}
export default SavedMovies;