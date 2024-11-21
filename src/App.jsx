import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie";
import Form from "./components/Form";
import { uid } from "uid";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function handleAddMovie(newMovie) {
    setMovies([...movies, { id: uid(), ...newMovie }]);
  }

  function handleDeleteMovie(idToDelete) {
    setMovies(movies.filter((movie) => movie.id !== idToDelete));
  }

  function handleToggleLike(idToToggle) {
    const updatedMovies = movies.map((movie) =>
      movie.id === idToToggle ? { ...movie, isLiked: !movie.isLiked } : movie
    );
    setMovies(updatedMovies);
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie
              name={movie.name}
              isLiked={movie.isLiked}
              onDeleteMovie={handleDeleteMovie}
              onToggleLike={handleToggleLike}
              id={movie.id}
            />
          </li>
        ))}
      </ul>
      <Form onAddMovie={handleAddMovie} />
    </div>
  );
}
