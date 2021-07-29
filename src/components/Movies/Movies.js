import React from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
// import Preloader from './Preloader/Preloader';

function Movies({ movies, savedMoviesPage }) {
       return (
            (<section className="movies">
                  <div className="content">
                  <SearchForm />
                  {/* <Preloader /> */}
                  <MovieCardList movies={movies} savedMoviesPage={savedMoviesPage} />
                  </div>
            </section>) 
       );
}
export default Movies;