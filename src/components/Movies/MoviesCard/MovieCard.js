import React, { useState } from 'react';
import * as mainApi from '../../../utils/MainApi';



function MovieCard({
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
        getSavedMovies
}) {

        const [isHeartRed, setHeartRed] = useState(false);

        function getTimeFromMins(duration) {
                let hours = Math.trunc(duration / 60);
                let minutes = duration % 60;
                return (hours > 0 ? hours + 'h' : '') + (minutes > 0 ? minutes + 'm' : '');
        };

        let newDuration = getTimeFromMins(duration);

        const heartClick = () => {
                setHeartRed(!isHeartRed);
                mainApi.setMovie({
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
                })
                .then((res) => {
                        console.log(res);
                })
                .catch((err) => {
                        console.log(err);
                });
        }

        const deleteClick = () => {
                mainApi.deleteMovie(movieId)
                .then((res) => {
                        getSavedMovies();
                })
                .catch((err) => {
                        console.log(err);
                });
        }
        return (
                <article className="movieCard">
                        <img className="movieCard__img" 
                        src={savedMoviesPage ? `${thumbnail}` : `https://api.nomoreparties.co${thumbnail}`} 
                        alt="Картинка фильма" />
                        <h2 className="movieCard__heading">{nameRU}</h2>
                        {!savedMoviesPage ?
                                <button onClick={heartClick} type="button"
                                        className={`movieCard__like ${isHeartRed ? "movieCard__like_red" : ""}`}>
                                </button>
                                :
                                <button type="button" onClick={deleteClick} className="movieCard__delete"></button>
                        }
                        <p className="movieCard__time">{newDuration}</p>
                </article>
        );
}
export default MovieCard;