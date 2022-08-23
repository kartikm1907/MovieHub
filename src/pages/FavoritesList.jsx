import React, { useContext } from "react";
import MovieContext from "../store/MovieContext";


export default function FavoritesList(props) {
    const ctx = useContext(MovieContext);
  return (

    <div style={{ border: "2px solid black", margin: "15px" }}>
      <h3>Favorite Movies... </h3>
      {ctx.moviesList.map((movie) => {
        return <h5>{movie.name}</h5>;
      })}
    </div>
  );
}
