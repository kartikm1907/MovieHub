import React, { useContext,useState } from "react";
import MovieContext from "../store/MovieContext";
import Button from "@mui/material/Button";

const FavoriteForm = (name) => {
  const [movie, setMovie] = useState();
  const ctx = useContext(MovieContext);
  return (
    <div>
      <Button style={{'margin-top': '10px'}}
        onClick={() => {
            console.log("Inside add to favorites");
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
