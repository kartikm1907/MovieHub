import React, { useContext } from "react";
import MovieContext from "../store/MovieContext";
//this componet is a card(or simple div tag)




export default function FavoritesList(props) {
    const ctx = useContext(MovieContext);
  return (

    <div style={{ border: "2px solid black", margin: "15px" }}>
      <h3>Favorite Movies... </h3>
      {ctx.moviesList.map((movie) => {
       // console.log(movie.name);
        return <h5>{movie.name}</h5>;
      })}
      {/* {ctx.moviesList.map((movie) => {
          console.log({props});
        return <h5>{ctx.moviesCount}</h5>;
    })}  */}
    </div>
  );
}
