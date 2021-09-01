import React from 'react';

function SearchForm({
    movies,
    errors,
    searchPhrase,
    isCheckBox,
    handleChangeSearchPhrase,
    handlerCheckBox, 
    handleSearchSubmit,
}) {

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