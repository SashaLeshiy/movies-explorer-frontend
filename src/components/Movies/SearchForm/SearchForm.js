import React, { useEffect, useState } from 'react';

function SearchForm({
    handleChange,
    errors,
    setErrors,
    isValid,
    setSearchPhrase,
    searchPhrase,
    setSearchMovie,
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
    savedMovies
}) {
    
    useEffect(() => {
        setSearchPhrase('');
    }, [setSearchPhrase])

    function handleSearchSubmit(event) {
        event.preventDefault();
        console.log(savedMovies);
        if (!isValid) {
            return
        } else {
            setSearchMessage('');
            getPhilms();
            setIsSearch(true);
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