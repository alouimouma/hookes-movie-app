import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./component/MovieData";
import MovieList from "./component/MovieList";
import AddMovie from "./component/Addmovie";
import Filter from "./component/Filter";
function App() {
    const [movies, setMovies] = useState(moviesData);
    const [titleSearch, setTitleSearch] = useState("");
    const [rateSearch, setRateSearch] = useState(0);
    const handleAdd = (newMovie) => {
        if (
            newMovie.title !== "" &&
            newMovie.description !== "" &&
            newMovie.date !== "" &&
            newMovie.posterUrl !== "" &&
            newMovie.rate !== 0
        ) {
            setMovies([...movies, newMovie]);
        } else {
            alert("All fields are mandatory!");
        }
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    background: "black",
                }}
            >
                <AddMovie handleAdd={handleAdd} />
                <Filter
                    rate={rateSearch}
                    setRateSearch={setRateSearch}
                    setTitleSearch={setTitleSearch}
                />
            </div>
            <h1 id="appTitle">best film in the world</h1>
            <MovieList
                rateSearch={rateSearch}
                titleSearch={titleSearch}
                movies={movies}
            />
        </div>
    );
}

export default App;
