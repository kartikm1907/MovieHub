import React, { useContext } from "react";
import MovieContext from "../store/MovieContext";
export default function NumberofFavorites(props) {
  const ctx = useContext(MovieContext);
  return (
    <>
      <h3>Number of favorite Movies: {ctx.moviesCount} </h3>
    </>
  );
}
