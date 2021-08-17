import React, { useEffect } from 'react';
import SavedMovies from '../../SavedMovies/SavedMovies';

function SearchForm({
    movies,
    // handleChange,
    errors,
    // setErrors,
    isValid,
    setIsValid,
    setSearchPhrase,
    searchPhrase,
    setSearchMovie,
    setSavedMovies,
    // searchMovie,
    // setMovies,
    // movies,
    // isSearch,
    setIsSearch,
    getPhilms,
    // searchMessage,
    setSearchMessage,
    setIsCheckBox,
    isCheckBox,
    // compareMovies,
    handleChangeSearchPhrase,
    // searchMov,
    handlerCheckBox, 
    savedMovies,
    movieSearch,
    savedMoviesPage,
    // setIndex,
    // index,
    setButtonMore,
    // buttonMore,
    indexByWidth,
    savedMovieSearch,
    setSearchSavedMovies,
    searchSavedMovies
}) {

    useEffect(() => {
        // setSearchPhrase('');
        setIsValid(false);
    }, [])

    function handleSearchSubmit(event) {
        event.preventDefault();
        if (isValid) {
            searchSubmitAndCheck();
        }
    }

    function searchSubmitAndCheck () {
        if (!savedMoviesPage) {
            setIsSearch(true);
            movieSearch(JSON.parse(localStorage.getItem('movies')));
            setSearchMovie(JSON.parse(localStorage.getItem('searchMovies')));
            setButtonMore(true);
            indexByWidth();
            setIsValid(false);
        } else if (savedMoviesPage) {
            savedMovieSearch();
            setSavedMovies(JSON.parse(localStorage.getItem('searchSavedMovies')));
            setIsValid(false);
        }
        setSearchMessage('');
    }

    useEffect(() => {
            searchSubmitAndCheck();
    }, [isCheckBox]);


    return (
        <div className="searchForm">
            <form name="searchForm" className="searchForm__form" onSubmit={handleSearchSubmit} noValidate>
                <input className="searchForm__input"
                    type="text" placeholder="Фильм"
                    required name="search" minLength="2"
                    onChange={handleChangeSearchPhrase}
                    value={searchPhrase || ''}
                />
                <button className="searchForm__button" type="submit">Поиск</button>
                <span className="searchForm__error">{errors}</span>
                <label className="searchForm__checkbox">
                    <input type="checkbox" onChange={handlerCheckBox} checked={isCheckBox} />
                    <span className="searchForm__checkbox_switch"></span>
                    <span className="searchForm__checkbox_heading">Короткометражки</span>
                </label>
            </form>
        </div>
    );
}

export default SearchForm;