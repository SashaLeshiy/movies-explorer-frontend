import React from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader';


function Movies({ setMovies, 
      movies,
      savedMoviesPage, 
      handleChange, 
      isValid, 
      errors, 
      setErrors,
      setIsSearch, 
      isSearch, 
      setSearchPhrase, 
      searchPhrase,
      searchWord,
      setSearchMovie,
      searchMovie,
      getPhilms,
      setSearchMessage,
      searchMessage, 
      handleMore,
      setNewSearchMovie,
      newSearchMovie,
      isLoading,
      isCheckBox,
      setIsCheckBox
}) {
       return (
            (<section className="movies">
                  <div className="movies__content content">
                  <SearchForm 
                  handleChange={handleChange} 
                  isValid={isValid} 
                  errors={errors} 
                  setErrors={setErrors}
                  setSearchPhrase={setSearchPhrase}
                  searchPhrase={searchPhrase}
                  searchWord={searchWord}
                  setSearchMovie={setSearchMovie}
                  searchMovie={searchMovie}
                  setMovies={setMovies}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                  movies={movies}
                  getPhilms={getPhilms}
                  setSearchMessage={setSearchMessage}
                  searchMessage={searchMessage}
                  setNewSearchMovie={setNewSearchMovie}
                  newSearchMovie={newSearchMovie}
                  setIsCheckBox={setIsCheckBox}
                  isCheckBox={isCheckBox}
                  />
                  {isLoading ? 
                  <Preloader />
                  :
                  <span></span>
                  }
                  <MovieCardList setMovies={setMovies} 
                  savedMoviesPage={savedMoviesPage}  
                  isValid={isValid} 
                  isSearch={isSearch} 
                  searchMovie={searchMovie}
                  handleMore={handleMore}
                  />
                  </div>
            </section>) 
       );
}
export default Movies;