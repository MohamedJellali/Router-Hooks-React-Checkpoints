import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Informations.css";

function Informations({ match, movies }) {
  console.log("props");

  let movieItem = movies.find((movie) => movie.id == match.params.id);
  console.log("movieItem", movieItem);

  return (
    <div className="wrapper">
      <Link exact to="/">
        <button>BACK TO HOME</button>
      </Link>
      <h5>Description of "{movieItem.nameOfMovie}" :</h5>
      <p>{movieItem.description}</p>
      <div className="trailer">
        <h5>Trailer of "{movieItem.nameOfMovie}" :</h5>
        <div>
          <ReactPlayer controls={true} url={movieItem.url} />
        </div>
      </div>
    </div>
  );
}

export default Informations;
