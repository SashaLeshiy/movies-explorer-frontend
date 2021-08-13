import React, { useEffect, useState } from 'react';

function SearchForm({
    handleChange,
    errors,
    setErrors,
    isValid,
    setSearchPhrase,
    searchPhrase,
    setSearchMovie,
    setSavedMovies,
    searchMovie,
    setMovies,
    movies,
    isSearch,
    setIsSearch,
    getPhilms,
    searсhMessage,
    setSearchMessage,
    setIsCheckBox,
    isCheckBox,
    compareMovies,
    handleChangeSearchPhrase,
    searchMov,
    handlerCheckBox, 
    savedMovies,
    movieSearch,
    savedMoviesPage,
    setIndex,
    index,
    setButtonMore,
    buttonMore,
    indexByWidth
}) {
    
    useEffect(() => {
        setSearchPhrase('');
    }, [setSearchPhrase])

    function handleSearchSubmit(event) {
        event.preventDefault();
        if (isValid && !savedMoviesPage) {
            setSearchMessage('');
            setIsSearch(true);
            getPhilms();
            setButtonMore(true);
            indexByWidth();
        } else if (isValid) {
            movieSearch(savedMovies);
        }
    }

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
                <span className="searchForm__error">{errors.search}</span>
                <label className="searchForm__checkbox">
                    <input type="checkbox" onChange={handlerCheckBox} />
                    <span className="searchForm__checkbox_switch"></span>
                    <span className="searchForm__checkbox_heading">Короткометражки</span>
                </label>
            </form>
        </div>
    );
}

export default SearchForm;