import React from 'react';

function SearchForm() {
    return (
        (<section className="searchForm">
            <div className="content">
                <form name="searchForm" className="searchForm">
                    <input className="searchForm__input" type="text" value="Фильм" />
                    <button className="searchForm__button" type="submit">Поиск</button>
                    <label className="searchForm__checkbox">
                        <input type="checkbox" />
                        <span className="searchForm__checkbox_switch"></span>
                        <span className="searchForm__checkbox_heading">Короткометражки</span>
                    </label>
                </form>
                
            </div>
        </section>) 
   );
}

export default SearchForm;