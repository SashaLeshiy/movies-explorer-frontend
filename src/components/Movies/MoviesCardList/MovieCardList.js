import React, { useEffect, useState } from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import * as mainApi from '../../../utils/MainApi';
import SavedMovies from '../../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MovieCardList({ movies, 
    savedMoviesPage, 
    isValid, 
    isSearch, 
    searchMovie, 
    setNewSearchMovie,
    newSearchMovie,
    setSavedMovies,
    savedMovies,
    getSavedMovies,
    createMovie,
    setCurrentUser,
    currentUser,
    arrayLikeMovieId, 
    setHeartRed,
    isHeartRed
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
                            id={movie._id}
                            movieId={movie.id}
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
                            createMovie={createMovie}
                            arrayLikeMovieId={arrayLikeMovieId}
                            setHeartRed={setHeartRed}
                            isHeartRed={isHeartRed}
                        />
                    })
                    )}
                </div>)
            :
            localMovies ?
                (<div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
                    {(localMovies.map(smovie => {
                            return <MovieCard key={smovie.id}
                            movieId={smovie.id}
                            country={smovie.country}
                            director={smovie.director}
                            year={smovie.year}
                            description={smovie.description}
                            image={smovie.image}
                            trailer={smovie.trailerLink}
                            nameRU={smovie.nameRU}
                            nameEN={smovie.nameEN}
                            thumbnail={smovie.image.url}
                            duration={smovie.duration}
                            savedMovies={savedMovies}
                            getSavedMovies={getSavedMovies}
                            savedMoviesPage={savedMoviesPage}
                            createMovie={createMovie}
                            arrayLikeMovieId={arrayLikeMovieId}
                            setHeartRed={setHeartRed}
                            isHeartRed={isHeartRed}
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