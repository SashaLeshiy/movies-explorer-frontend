import React, { useEffect } from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
// import Preloader from './Preloader/Preloader';


function Movies({ movies, savedMoviesPage, setMainPage, setLoggedIn }) {
      useEffect(() => {
      setMainPage(false);
      setLoggedIn(true);
      });
       return (
            (<section className="movies">
                  <div className="movies__content content">
                  <SearchForm />
                  {/* <Preloader /> */}
                  <MovieCardList movies={movies} savedMoviesPage={savedMoviesPage} />
                  </div>
            </section>) 
       );
}
export default Movies;