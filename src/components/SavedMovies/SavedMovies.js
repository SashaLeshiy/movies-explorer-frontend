import React, { useEffect } from 'react';
import MovieCardList from '../Movies/MoviesCardList/MovieCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies({ movies, setSavedMoviesPage, savedMoviesPage, setMainPage, setLoggedIn }) {
      useEffect(() => {
            setSavedMoviesPage(true);
            setMainPage(false);
            setLoggedIn(true);
            });
      return (
            <section className="savedMovies">
                  <div className="content">
                  <SearchForm />
                  <MovieCardList movies={movies} savedMoviesPage={savedMoviesPage} />
                  </div>
            </section>
      );
}
export default SavedMovies;