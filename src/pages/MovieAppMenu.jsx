import React from "react";
import FavoritesList from "./FavoritesList";
import MovieApp from "./MovieApp";
import NumberofFavorites from "./NumberofFavorites";

export default function MovieAppMenu() {
  return (
    <div>
      <FavoritesList />
      {/* <FavoriteForm /> */}
      <NumberofFavorites />
      <MovieApp />
      {/* <InputForm/> */}
    </div>
  );
}
