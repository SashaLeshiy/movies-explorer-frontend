import React from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
// import Preloader from './Preloader/Preloader';


function Movies({ movies, 
      savedMoviesPage, 
      handleChange, 
      isValid, 
      errors, 
      setIsSearch, 
      isSearch, 
      setSearchPhrase, 
      searchPhrase,
      searchWord,
      setSearchMovie,
      searchMovie
}) {
       return (
            (<section className="movies">
                  <div className="movies__content content">
                  <SearchForm 
                  handleChange={handleChange} 
                  isValid={isValid} 
                  errors={errors} 
                  setSearchPhrase={setSearchPhrase}
                  searchPhrase={searchPhrase}
                  searchWord={searchWord}
                  setSearchMovie={setSearchMovie}
                  searchMovie={searchMovie}
                  movies={movies}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                  />
                  {/* <Preloader /> */}
                  <MovieCardList movies={movies} 
                  savedMoviesPage={savedMoviesPage}  
                  isValid={isValid} 
                  isSearch={isSearch} 
                  searchMovie={searchMovie}
                  />
                  </div>
            </section>) 
       );
}
export default Movies;