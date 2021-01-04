import React, { useState } from "react";
import Moviecard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Link } from "react-router-dom";

function MovieList({ searchmovie, searchrate, movies, setMovies }) {
  console.log(searchmovie);
  console.log("set", searchrate);

  const [nameOfMovie, setNameOfMovie] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState(0);

  const Add = (e) => {
    e.preventDefault();
    setId(movies[movies.length - 1].id + 1);
    let newMovie = {
      nameOfMovie: nameOfMovie,
      description: description,
      image: image,
      rate: rate,
      url: url,
      id: id,
    };
    setMovies([...movies, newMovie]);
    console.log(movies);
  };

  const List = ({ movies }) => (
    <ul>
      {movies.map((item) => (
        <ListItem key={item.nameOfMovie} item={item} />
      ))}
    </ul>
  );

  const List2 = ({ movies }) => (
    <ul>
      {movies
        .filter(
          (movie) =>
            movie.rate.toLowerCase() >= searchrate &&
            movie.nameOfMovie.toLowerCase().includes(searchmovie.toLowerCase())
        )
        .map((item) => (
          <ListItem key={item.nameOfMovie} item={item} />
        ))}
    </ul>
  );

  const ListItem = ({ item }) => (
    <li>
      <Link to={`/informations/${item.id}`}>
        <Moviecard
          nameOfMovie={item.nameOfMovie}
          image={item.image}
          description={item.description}
          rate={item.rate}
          url={item.url}
          id={item.id}
        />
      </Link>
    </li>
  );

  console.log(movies);
  console.log(id);

  if (!searchmovie && !searchrate) {
    return (
      <div className="list">
        <List movies={movies} />
        {/* <Route exact path="/informations/:id" component={Informations} />; */}
        <div className="addstyle">
          <form>
            <label for="name">Name of Movie:</label>
            <br />
            <input
              type="text"
              name="nameOfMovie"
              onChange={(e) => setNameOfMovie(e.target.value)}
            />
            <br />

            <label for="image">URL image:</label>
            <br />
            <input
              type="text"
              name="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <br />

            <label for="des">Description:</label>
            <br />
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <label for="rate">Rating:</label>
            <br />
            <input
              type="text"
              name="rate"
              onChange={(e) => setRate(e.target.value)}
            />
            <br />
            <label for="rate">trail url:</label>
            <br />
            <input
              type="text"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <br />
            <br />
          </form>
        </div>
        <button onClick={Add}>Add a Movie</button>
      </div>
    );
  } else if (searchmovie || searchrate) {
    return (
      <div className="list">
        <List2 movies={movies} />
        {/* <Route exact path="/informations/:id" component={<Informations />} />; */}
        <div className="addstyle">
          <form>
            <label for="name">Name of Movie:</label>
            <br />
            <input
              type="text"
              name="nameOfMovie"
              onChange={(e) => setNameOfMovie(e.target.value)}
            />
            <br />

            <label for="image">URL image:</label>
            <br />
            <input
              type="text"
              name="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <br />

            <label for="des">Description:</label>
            <br />
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <label for="rate">Rating:</label>
            <br />
            <input
              type="text"
              name="rate"
              onChange={(e) => setRate(e.target.value)}
            />
            <br />
            <br />
            <label for="rate">trail url:</label>
            <br />
            <input
              type="text"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <br />
            <br />
          </form>
        </div>
        <button onClick={Add}>Add a Movie</button>
      </div>
    );
  }
}

export default MovieList;
