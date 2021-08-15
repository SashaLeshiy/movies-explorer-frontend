import React, { useEffect, useState } from 'react';
import MovieCard from '../MoviesCard/MovieCard';
// import * as mainApi from '../../../utils/MainApi';
// import SavedMovies from '../../SavedMovies/SavedMovies';
// import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MovieCardList({ 
    // movies,
    savedMoviesPage,
    // isValid,
    // isSearch,
    searchMovie,
    // setNewSearchMovie,
    // newSearchMovie,
    // setSavedMovies,
    savedMovies,
    getSavedMovies,
    createMovie,
    // setCurrentUser,
    // currentUser,
    arrayLikeMovieId,
    // setHeartRed,
    // isHeartRed,
    setIndex,
    index,
    setButtonMore,
    buttonMore,
    searchMessage
}) {
    const [inputMovie, setInputMovie] = useState([]);
    function handleMore() {
        if(window.innerWidth >= 1158) {
        setIndex(i => i + 4);
        } else if (window.innerWidth >= 882) {
            setIndex(i => i + 3);
        } else if (window.innerWidth >= 666) {
            setIndex(i => i + 2);
        } else {
            setIndex(i => i + 1);
        }
    } 

    useEffect(() => {
        if (!savedMoviesPage) {
            let renderMovie = [];
            searchMovie.map(mov => {
                if (renderMovie.length <= index) {
                    renderMovie.push(mov);
                    if (renderMovie.length === searchMovie.length) {
                        setButtonMore(false);
                    }
                }
            })
            setInputMovie(renderMovie);
        }
    }, [setInputMovie, index, searchMovie, savedMoviesPage]);



    return (
        <>
            {savedMoviesPage ?
            (<div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
                {(savedMovies.map(movie => {
                    return <MovieCard key={movie._id}
                        id={movie._id}
                        movieId={movie.id}
                        country={movie.country || 'not specified'}
                        director={movie.director || 'not specified'}
                        year={movie.year}
                        description={movie.description || 'not specified'}
                        image={movie.image}
                        trailer={movie.trailer}
                        nameRU={movie.nameRU || 'not specified'}
                        nameEN={movie.nameEN || 'not specified'}
                        thumbnail={movie.image.url || movie.thumbnail}
                        duration={movie.duration}
                        savedMoviesPage={savedMoviesPage}
                        getSavedMovies={getSavedMovies}
                        createMovie={createMovie}
                        arrayLikeMovieId={arrayLikeMovieId}
                        // setHeartRed={setHeartRed}
                        // isHeartRed={isHeartRed}
                    />

                })
                )}
            </div>)
            :
            searchMovie ?
                (<div className={`movieCardList ${savedMoviesPage ? "movieCardList__saved" : ""}`}>
                    {(inputMovie.map(smovie => {
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
                            // setHeartRed={setHeartRed}
                            // isHeartRed={isHeartRed}
                        />

                    })
                    )}
                    {searchMovie.length === 0 || !buttonMore ?
                        <span></span>
                        :
                        <button onClick={handleMore} className="button__moreMovies">Еще</button>
                    }
                </div>)
                :
                <span></span>}
                <div className="movieCardList__empty">{searchMessage}</div>
        </>        
    );
}
export default MovieCardList;