import React from 'react';
import MovieCard from '../MoviesCard/MovieCard';

function MovieCardList({ movies, savedMoviesPage }) {
    return (
        <div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
            {(movies.map(movie => {
                return <MovieCard key={movie._id}
                    nameRU={movie.nameRU}
                    thumbnail={movie.thumbnail}
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
        </div>
    );
}
export default MovieCardList;