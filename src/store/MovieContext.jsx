import React from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = [{ name: "Inception" }, { name: "Spaceship" }];
const MovieContext = createContext({
  moviesList: [],
  moviesCount: 0,
  addMovie: () => {},
});

export function MovieContextProvider(props) {
  const [moviesList, setMoviesList] = useState(initialState);
  const addMovie = (movie) => {
    console.log(movie)
    setMoviesList([...moviesList, movie]);
  }; 

  const context = {
    moviesList: moviesList,
    moviesCount: moviesList.length,
    addMovie,
  };

  return <MovieContext.Provider value={context}>{props.children}</MovieContext.Provider>;
}

export default MovieContext;

{
  /* <StudentContextProvider>
    Navbar
</StudentContextProvider> */
}
//impleementing 1 state multiple components
