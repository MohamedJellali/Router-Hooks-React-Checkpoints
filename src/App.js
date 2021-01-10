import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/Movielist/MovieList";
import Navbarapp from "./components/navbar/Navbar";
import { Link, Route } from "react-router-dom";
import Informations from "./Informations";

const list = [
  {
    nameOfMovie: "Joker",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    image:
      "https://media.senscritique.com/media/000018727645/source_big/Joker.jpg",
    rate: "4",
    url: "https://youtu.be/t433PEQGErc",
    id: 1,
  },
  {
    nameOfMovie: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
    rate: "5",
    url: "https://youtu.be/sY1S34973zA",
    id: 2,
  },
  {
    nameOfMovie: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.",
    image: "https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg",
    rate: "4",
    url: "https://youtu.be/zSWdZVtXT7E",
    id: 3,
  },
  {
    nameOfMovie: "Capernaum",
    description:
      "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
    image: "https://fr.web.img2.acsta.net/pictures/18/09/11/09/08/2776515.jpg",
    rate: "3",
    url: "https://youtu.be/ULUo0048xZE",
    id: 4,
  },
  {
    nameOfMovie: "The Ring",
    description:
      "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
    image:
      "https://d1w8cc2yygc27j.cloudfront.net/2083456129639841013/-2755161209674298117.jpg",
    rate: "2",
    url: "https://youtu.be/uukQ_6szDm8",
    id: 5,
  },
];

function App() {
  const [searchmovie, setSearchmovie] = useState("");
  const [searchrate, setSearchrate] = useState("");
  const [movies, setMovies] = useState(list);

  return (
    <div>
      <Navbarapp
        setSearchmovie={setSearchmovie}
        setSearchrate={setSearchrate}
      />
      <div className="routes">
        <Route
          exact
          path="/"
          render={(props) => (
            <div className="App">
              <div>
                <h1>MEDFLIX</h1>
              </div>

              <MovieList
                searchmovie={searchmovie}
                searchrate={searchrate}
                movies={movies}
                setMovies={setMovies}
                {...props}
              />
            </div>
          )}
        />
        <div className="inf">
          <Route
            exact
            path="/informations/:id"
            render={(props) => <Informations movies={movies} {...props} />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
