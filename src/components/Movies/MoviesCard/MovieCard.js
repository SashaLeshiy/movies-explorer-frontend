import React, { useState } from 'react';
import movie_image from "../../../images/movie_image.jpg";



function MovieCard({ nameRU, thumbnail, duration, savedMoviesPage }) {
        const [isHeartRed, setHeartRed] = useState(false);

        const heartClick = () => {
                setHeartRed(!isHeartRed);
        }
        return (
                <article className="movieCard">
                        <img className="movieCard__img" src={movie_image} alt="Картинка фильма" />
                        <h2 className="movieCard__heading">{nameRU}</h2>
                        {!savedMoviesPage ?
                                <button onClick={heartClick} type="button" 
                                className={`movieCard__like ${isHeartRed ? "movieCard__like_red" : ""}`}>
                                </button>
                                :
                                <button type="button" className="movieCard__delete"></button>
                        }
                        <p className="movieCard__time">{duration}</p>
                </article>
        );
}
export default MovieCard;