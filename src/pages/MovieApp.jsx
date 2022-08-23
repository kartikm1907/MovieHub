import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import "./style.css";
import FavoriteForm from "./FavoriteForm";
import MovieContext from "../store/MovieContext";

export default function InputForm() {
  const [searchQuery, updateSearchQuery] = useState("");
  const ctx = useContext(MovieContext);
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [imdb, setImdb] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const [req, setReq] = useState("");
  const [location, setLocation] = useState("");
  const [favourites, setFavourites] = useState(["SpiderMan", "Batman"]);
  const favs = [];
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const apiCall = async (e) => {
    if (location === "") {
      alert("Empty Input");
    }
    e.preventDefault();
    setReq(location);
    const config = { params: { q: location } };
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows`,
      config
    );
    const config1 = { params: { t: location } };
    const res1 = await axios.get(
      `https://www.omdbapi.com/?t=${location}&apikey=80fd038`
    );
    setImdb(res1.data);
    updateMovieList(response.data);
    console.log(movieList);
  };
  
  return (
    <>
      <div className="App">
        <form onSubmit={apiCall}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Movie-Name"
              variant="outlined"
              name="Location"
              value={location}
              onChange={handleChange}
            />
          </Box>
          <Button
            type="submit"
            color="success"
            variant="contained"
            style={{ margin: "auto" }}
          >
            Search
          </Button>
        </form>
      </div>
      {req === "" ? (
        <h2 style={{ textAlign: "center" }}>
          Search Movies/WebSeries/Documentries{" "}
        </h2>
      ) : imdb.Response === "False" ? (
        <>
          <h2>
            Error 404 :( <br /> "No Such Movie/WebSeries/Documentry Found"{" "}
          </h2>{" "}
        </>
      ) : (
        <>
          <div>
            <p style={{ textAlign: "center" }}>
              Results for <b> {imdb.Title} </b>{" "}
            </p>
            {imdb.Response ? (
              <div className="imdb" style={{ "margin-top": "20px" }}>
                <div className="img">
                  <img src={imdb.Poster} alt="" />
                  <FavoriteForm name={location} />
                </div>

                <div className="content1">
                  <p>
                    Actors : <b> {imdb.Actors} </b>{" "}
                  </p>
                  <p>
                    Runtime : <b> {imdb.Runtime} </b>{" "}
                  </p>
                  <p>
                    Genre : <b>{imdb.Genre}</b>{" "}
                  </p>
                  <p>
                    Awards : <b>{imdb.Awards}</b>{" "}
                  </p>
                  <p>
                    Box-Office Collection : <b>{imdb.BoxOffice}</b>{" "}
                  </p>
                  <p>
                    {" "}
                    IMDb Rating : <b> {imdb.imdbRating} </b> Total Votes :
                    {imdb.imdbVotes}{" "}
                  </p>
                  <div className="plot">
                    <h3>Plot Of the Movie</h3>
                    <p>{imdb.Plot}</p>
                  </div>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>
          {movieList.length == 0 ? (
            <>""</>
          ) : (
            <div className="content">
              <h3>Some More Related Results</h3>
              <TableContainer component={Paper} style={{ margin: "auto" }}>
                <Table aria-label="simple table" style={{ magin: "auto" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>rating</TableCell>
                      <TableCell>Language</TableCell>
                      <TableCell>Genre</TableCell>
                      <TableCell>Images</TableCell>
                      {/* <TableCell>Favourites</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {movieList.map((row) => (
                      <TableRow
                        key={row.score}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{row.show.name}</TableCell>
                        <TableCell>{row.show.rating.average}</TableCell>
                        <TableCell>{row.show.language}</TableCell>
                        <TableCell>{row.show.genres}</TableCell>
                        {row.show.image ? (
                          <img
                            src={row.show.image.medium}
                            height="200px"
                            alt="Image Not Found"
                          />
                        ) : (
                          "Image Not found"
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </>
      )}
    </>
  );
}
