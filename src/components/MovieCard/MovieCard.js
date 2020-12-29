import React from "react";
import "./MovieCard.css";
import ReactStars from "react-rating-stars-component";

export default function Moviecard(movie) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.nameOfMovie} />
      <div className="Rating">
        <h3>{movie.nameOfMovie} </h3>
        <ReactStars
          count={5}
          value={movie.rate}
          size={24}
          starColor="#ffd700"
        />
      </div>
      <p>{movie.Description}</p>
      <div class="overlay">
        <div class="text">{movie.description}</div>
      </div>
    </div>
  );
}
