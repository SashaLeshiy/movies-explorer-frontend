import React from 'react';
import MovieCardList from './MoviesCardList/MovieCardList';
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader';


function Movies({ setMovies,
      // movies,
      savedMovies,
      savedMoviesPage,
      // handleChange,
      isValid,
      errors,
      // setErrors,
      setIsSearch,
      isSearch,
      setSearchPhrase,
      searchPhrase,
      searchWord,
      // setSearchMovie,
      searchMovie,
      getPhilms,
      getSavedMovies,
      // setSearchMessage,
      searchMessage,
      handleMore,
      setNewSearchMovie,
      newSearchMovie,
      isLoading,
      // isCheckBox,
      // setIsCheckBox,
      // compareMovies,
      createMovie,
      // setCurrentUser,
      // currentUser,
      arrayLikeMovieId,
      handleChangeSearchPhrase,
      handlerCheckBox,
      setHeartRed,
      isHeartRed,
      setIndex,
      index,
      setButtonMore,
      buttonMore,
      indexByWidth

}) {
      return (
            (<section className="movies">
                  <div className="movies__content content">
                        <SearchForm
                              // handleChange={handleChange}
                              isValid={isValid}
                              errors={errors}
                              // setErrors={setErrors}
                              setSearchPhrase={setSearchPhrase}
                              searchPhrase={searchPhrase}
                              searchWord={searchWord}
                              // setSearchMovie={setSearchMovie}
                              // searchMovie={searchMovie}
                              // setMovies={setMovies}
                              isSearch={isSearch}
                              setIsSearch={setIsSearch}
                              // movies={movies}
                              getPhilms={getPhilms}
                              // setSearchMessage={setSearchMessage}
                              // searchMessage={searchMessage}
                              setNewSearchMovie={setNewSearchMovie}
                              newSearchMovie={newSearchMovie}
                              // setIsCheckBox={setIsCheckBox}
                              // isCheckBox={isCheckBox}
                              // compareMovies={compareMovies}
                              handleChangeSearchPhrase={handleChangeSearchPhrase}
                              handlerCheckBox={handlerCheckBox}
                              // setIndex={setIndex}
                              // index={index}
                              setButtonMore={setButtonMore}
                              // buttonMore={buttonMore}
                              indexByWidth={indexByWidth}
                        />
                        {isLoading ?
                              <Preloader />
                              :
                              <span></span>
                        }
                        <MovieCardList setMovies={setMovies}
                              getSavedMovies={getSavedMovies}
                              savedMovies={savedMovies}
                              savedMoviesPage={savedMoviesPage}
                              // isValid={isValid}
                              // isSearch={isSearch}
                              searchMovie={searchMovie}
                              handleMore={handleMore}
                              createMovie={createMovie}
                              // setCurrentUser={setCurrentUser}
                              // currentUser={currentUser}
                              arrayLikeMovieId={arrayLikeMovieId}
                              setHeartRed={setHeartRed}
                              isHeartRed={isHeartRed}
                              setIndex={setIndex}
                              index={index}
                              setButtonMore={setButtonMore}
                              buttonMore={buttonMore}
                              searchMessage={searchMessage}

                        />
                  </div>
            </section>)
      );
}
export default Movies;