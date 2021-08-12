import React, { useEffect, useState } from 'react';
import * as mainApi from '../../../utils/MainApi';
import SavedMovies from '../../SavedMovies/SavedMovies';


function MovieCard({
        id,
        movieId,
        country,
        director,
        year,
        description,
        image,
        trailer,
        nameEN,
        nameRU,
        thumbnail,
        duration,
        savedMoviesPage,
        getSavedMovies,
        createMovie,
        arrayLikeMovieId,
        savedMovies
        // setHeartRed,
        // isHeartRed
}) {

        const [isHeartRed, setHeartRed] = useState(false);

        useState(() => {
                if(arrayLikeMovieId) {
                        arrayLikeMovieId.forEach(id => {
                                if(id === movieId) {
                                        setHeartRed(true);
                                }
                        })
                }
        }, [arrayLikeMovieId])
        
        function getTimeFromMins(duration) {
                let hours = Math.trunc(duration / 60);
                let minutes = duration % 60;
                return (hours > 0 ? hours + 'h' : '') + (minutes > 0 ? minutes + 'm' : '');
        };

        let newDuration = getTimeFromMins(duration);

        function deleteMovieByClick() {
                mainApi.deleteMovie(id)
                        .then((res) => {
                                getSavedMovies();
                        })
                        .catch((err) => {
                                console.log(err);
                        });
            }

        function heartClick() {
                setHeartRed(!isHeartRed);
                if(!isHeartRed){
                        createMovie({
                                movieId,
                                country,
                                director,
                                year,
                                description,
                                image,
                                trailer,
                                nameEN,
                                nameRU,
                                thumbnail,
                                duration,
                        });
                } else {
                        savedMovies.map(mov => {
                                if(mov.movieId === movieId) {
                                id = mov._id;
                                deleteMovieByClick();
                                };
                        })
                        
                }
        }

        return ( 
                (<article className="movieCard">
                        <img className="movieCard__img"
                                src={savedMoviesPage ? `${thumbnail}` : `https://api.nomoreparties.co${thumbnail}`}
                                alt="Картинка фильма" />
                        <h2 className="movieCard__heading">{nameRU}</h2>
                        {!savedMoviesPage ? 
                                (<button onClick={heartClick} type="button"
                                        className={`movieCard__like ${isHeartRed ? "movieCard__like_red" : ""}`}>
                                </button>)
                                :
                                (<button type="button" onClick={deleteMovieByClick} className="movieCard__delete"></button>)
                        }
                        <p className="movieCard__time">{newDuration}</p>
                </article>)
        );
}
export default MovieCard;