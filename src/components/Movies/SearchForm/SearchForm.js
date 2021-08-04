import React from 'react';

function SearchForm({ handleChange, errors, isValid }) {
    return (
        (<div className="searchForm">
                <form name="searchForm" className="searchForm__form" noValidate>
                    <input className="searchForm__input" 
                    type="text" placeholder="Фильм" 
                    required name="search"
                    onChange={handleChange}
                    />
                    <button className="searchForm__button" type="submit">Поиск</button>
                    <span className="searchForm__error"></span>
                    <label className="searchForm__checkbox">
                        <input type="checkbox" />
                        <span className="searchForm__checkbox_switch"></span>
                        <span className="searchForm__checkbox_heading">Короткометражки</span>
                    </label>
                </form>
        </div>) 
   );
}

export default SearchForm;