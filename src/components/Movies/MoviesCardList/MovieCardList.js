import React, { useState } from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import * as mainApi from '../../../utils/MainApi';
import SavedMovies from '../../SavedMovies/SavedMovies';

function MovieCardList({ movies, 
    savedMoviesPage, 
    isValid, 
    isSearch, 
    searchMovie, 
    setNewSearchMovie,
    newSearchMovie,
    setSavedMovies,
    savedMovies,
    getSavedMovies
}) {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    // const [index, setIndex] = useState(0);

    

    // const handleMore = () => {
    //   if (localMovies.length !== newSearchMovie.length) {
    //     setIndex(i => i + 1);
    //     setNewSearchMovie([...newSearchMovie, localMovies[index]]);
    //   }
    //   console.log(newSearchMovie);
    // }

    return (
        savedMoviesPage ?
        (<div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
                    {(savedMovies.map(movie => {
                        return <MovieCard key={movie._id}
                            movieId={movie._id}
                            country={movie.country}
                            director={movie.director}
                            year={movie.year}
                            description={movie.description}
                            image={movie.image}
                            trailer={movie.trailerLink}
                            nameRU={movie.nameRU}
                            nameEN={movie.nameEN}
                            thumbnail={movie.image.url || movie.thumbnail}
                            duration={movie.duration}
                            savedMoviesPage={savedMoviesPage}
                            getSavedMovies={getSavedMovies}
                        />
                    })
                    )}
                    {localMovies.length === 0 ?
                    <span></span>
                    :
                    <button  className="button__moreMovies">Еще</button>
                    }
                </div>)
            :
            localMovies ?
                (<div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
                    {(localMovies.map(movie => {
                            return <MovieCard key={movie.id}
                            movieId={movie.id}
                            country={movie.country}
                            director={movie.director}
                            year={movie.year}
                            description={movie.description}
                            image={movie.image}
                            trailer={movie.trailerLink}
                            nameRU={movie.nameRU}
                            nameEN={movie.nameEN}
                            thumbnail={movie.image.url}
                            duration={movie.duration}
                            savedMoviesPage={savedMoviesPage}
                        />
                    })
                    )}
                    {localMovies.length === 0 ?
                    <span></span>
                    :
                    <button  className="button__moreMovies">Еще</button>
                    }
                </div>)
                :
                (<p className="movieCardList__empty">Введите ключевое слово в поисковую строку</p>)
    );
}
export default MovieCardList;