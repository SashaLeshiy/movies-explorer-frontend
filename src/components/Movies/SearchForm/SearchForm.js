import React from 'react';

function SearchForm() {
    return (
        (<div className="searchForm">
                <form name="searchForm" className="searchForm__form">
                    <input className="searchForm__input" type="text" value="Фильм" />
                    <button className="searchForm__button" type="submit">Поиск</button>
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