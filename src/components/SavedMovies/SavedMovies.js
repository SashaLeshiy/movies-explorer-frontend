import React from 'react';
import MovieCardList from '../Movies/MoviesCardList/MovieCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies({ movies, savedMoviesPage }) {
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