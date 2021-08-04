import React from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
// import Preloader from './Preloader/Preloader';


function Movies({ movies, savedMoviesPage, handleChange, isValid, errors }) {
       return (
            (<section className="movies">
                  <div className="movies__content content">
                  <SearchForm handleChange={handleChange} isValid={isValid} errors={errors} />
                  {/* <Preloader /> */}
                  <MovieCardList movies={movies} savedMoviesPage={savedMoviesPage}  isValid={isValid} />
                  </div>
            </section>) 
       );
}
export default Movies;