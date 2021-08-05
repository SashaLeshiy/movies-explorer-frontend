import React from 'react';

function SearchForm({
    handleChange,
    errors,
    isValid,
    setSearchPhrase,
    searchPhrase,
    // searchWord,
    setSearchMovie,
    searchMovie,
    movies,
    isSearch,
    setIsSearch
}) {
    let serMovie = [];
    function searchWord() {
        movies.filter((movie) => {
            if (movie.description.includes(searchPhrase.search)) {
                serMovie.push(movie);
            }
        })
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        // searchWord(searchPhrase.search);
        searchWord();
        setSearchMovie(serMovie);
        setIsSearch(true);
    }

    return (
        <div className="searchForm">
            <form name="searchForm" className="searchForm__form" onSubmit={handleSearchSubmit} noValidate>
                <input className="searchForm__input"
                    type="text" placeholder="Фильм"
                    required name="search" minLength="2"
                    onChange={handleChange}
                    value={searchPhrase.search}
                />
                <button className="searchForm__button" type="submit">Поиск</button>
                <span className="searchForm__error">{errors.search}</span>
                <label className="searchForm__checkbox">
                    <input type="checkbox" />
                    <span className="searchForm__checkbox_switch"></span>
                    <span className="searchForm__checkbox_heading">Короткометражки</span>
                </label>
            </form>
        </div>
    );
}

export default SearchForm;