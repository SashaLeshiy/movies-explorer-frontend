import React from 'react';
import MovieCard from '../MoviesCard/MovieCard';

function MovieCardList({ movies, savedMoviesPage, isValid, isSearch, searchMovie }) {
    return (
        isSearch ? 
        (<div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
            {(searchMovie.map(movie => {
                console.log(movie);
                return <MovieCard key={movie.id}
                    nameRU={movie.nameRU}
                    thumbnail={movie.image.url}
                    duration={movie.duration}
                    savedMoviesPage={savedMoviesPage}
                />
            })
            )}
            {!savedMoviesPage ? 
                <button className="button__moreMovies">Еще</button>
                :
                <span></span>
            }
        </div>)
        :
        (<p>не искал</p>)
    );
}
export default MovieCardList;