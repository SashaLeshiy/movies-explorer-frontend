import React, { useEffect } from 'react';

function SearchForm({
    // handleChange,
    errors,
    // setErrors,
    isValid,
    setSearchPhrase,
    searchPhrase,
    // setSearchMovie,
    // setSavedMovies,
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
    // handlerCheckBox, 
    savedMovies,
    movieSearch,
    savedMoviesPage,
    // setIndex,
    // index,
    setButtonMore,
    // buttonMore,
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

    function handlerCheckBox() {
        setIsCheckBox(!isCheckBox);
        localStorage.setItem('isCheck', !isCheckBox);
        // setIsCheckBox(JSON.parse(localStorage.getItem('isCheck')));
        // console.log(isCheckBox);
        // if (!savedMoviesPage) {
        //   movieSearch(JSON.parse(localStorage.getItem('searchMovies')));
        //   getPhilms();
        // } else {
        //   movieSearch(savedMovies);
        //   console.log(savedMovies);
        // }
    }

    function searchByCheck() {
        handlerCheckBox();
            if (!savedMoviesPage) {
                setIsSearch(true);
                console.log(isCheckBox);
                getPhilms();
                setButtonMore(true);
                indexByWidth();
            } else {
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
                <span className="searchForm__error">{errors}</span>
                <label className="searchForm__checkbox">
                    <input type="checkbox" onChange={searchByCheck} />
                    <span className="searchForm__checkbox_switch"></span>
                    <span className="searchForm__checkbox_heading">Короткометражки</span>
                </label>
            </form>
        </div>
    );
}

export default SearchForm;