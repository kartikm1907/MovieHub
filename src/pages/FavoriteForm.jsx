import React, { useContext,useState } from "react";
import MovieContext from "../store/MovieContext";
import Button from "@mui/material/Button";

const FavoriteForm = (name) => {
  const [movie, setMovie] = useState();
  const ctx = useContext(MovieContext);
 // console.log(ctx.moviesCount);
 // console.log({name});
  return (
    <div>
      <Button style={{'margin-top': '10px'}}
        onClick={() => {
            console.log("Inside add to favorites");
            //console.log({movie});
            // {(movie!="undefined")?ctx.addMovie({movie}) : console.log("movie not found")}
            ctx.addMovie(name);
        }}
        color="success" variant ="contained"
      >
        Add to favorites
      </Button>
    </div>
  );
};

export default FavoriteForm;
