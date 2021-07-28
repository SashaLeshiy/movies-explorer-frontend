import React from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
// import Preloader from './Preloader/Preloader';

function Movies() {
       return (
            (<section className="movies">
                  <div className="content">
                  <SearchForm />
                  {/* <Preloader /> */}
                  <MovieCardList />
                  </div>
            </section>) 
       );
}
export default Movies;