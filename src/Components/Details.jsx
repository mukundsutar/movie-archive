import React from "react";
import "../CSS/Details.css";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { currMovieID } from "./Tile";

export default function Details({ apiData, movieInfoData }) {
    const [movieData, setMovieData] = useState();
    const [currMovieIDj, setCurrMovieIDj] = useAtom(currMovieID);

    // algorith to find most popular movie currently
    let max = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let combinedScore = 0;
    // let IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    let IMG_PATH,
        movieID,
        moviePoster,
        movieBackdrop,
        movieName,
        movieDate,
        movieYear,
        movieTagline,
        genreStr;

    if (apiData) {
        for (let i = 0; i < apiData["results"].length; i++) {
            let popularity = apiData["results"][i]["popularity"];
            let averageVotes = apiData["results"][i]["vote_average"];

            let normPopularity = (popularity - 0) / (5000 - 0);
            let normAVGVotes = (averageVotes - 0) / (10 - 0);
            combinedScore = (normPopularity + normAVGVotes * 3) / 2;

            if (combinedScore > max) {
                max = combinedScore;
                index = i;
            }
        }

        IMG_PATH = "https://image.tmdb.org/t/p/w1280";
        movieID = apiData["results"][index]["id"];
        // window.localStorage.setItem("id", movieID);
        movieID = currMovieIDj;
        moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
        movieBackdrop = IMG_PATH + apiData["results"][index]["backdrop_path"];
        movieName = apiData["results"][index]["original_title"];
        movieDate = apiData["results"][index]["release_date"];
        movieYear = movieDate.substring(0, 4);
    } else if (movieInfoData) {
        // poster path
        IMG_PATH = "https://image.tmdb.org/t/p/w1280";

        moviePoster = IMG_PATH + movieInfoData["poster_path"];
        movieBackdrop = IMG_PATH + movieInfoData["backdrop_path"];
        movieName = movieInfoData["original_title"];
        movieID = movieInfoData["id"];
        movieYear = movieInfoData["release_date"];
        let movieTagline = movieInfoData["tagline"];
        movieTagline = movieInfoData["overview"];

        // trim movie date year
        // movieYear = movieYear.substring(0, 4);

        // setMovieData(movieInfoData);
    }

    // // fetching and proccessing movie data
    if (movieData) {
        let movie_genre = [];
        let movieGenre = movieData["genres"];
        if (movieGenre) {
            for (let i = 0; i < movieGenre.length; i++) {
                movie_genre.push(movieData["genres"][i]["name"]);
            }

            genreStr = "";
            for (let i = 0; i < movie_genre.length; i++) {
                genreStr = genreStr.concat(movie_genre[i]);
                if (i < movie_genre.length - 1) {
                    genreStr = genreStr.concat(" / ");
                }
            }
        }

        movieTagline = movieData["tagline"];
    }

    // fetch additional details
    useEffect(() => {
        async function fetchMyAPI() {
            const url = await fetch(
                "https://api.themoviedb.org/3/movie/" +
                    movieID +
                    "?language=en-US&api_key=" +
                    process.env.REACT_APP_API_KEY
            );
            const data = await url.json();

            setMovieData(data);
        }

        fetchMyAPI();
    }, [movieID]);

    const handleDeatilsClick = () => {
        console.log(movieID);

        setCurrMovieIDj(movieID);
    };

    return (
        <>
            <SkeletonTheme baseColor="#404040" highlightColor="#525252">
                <div className="reccom-container">
                    <div className="reccom-ele reccom-ele-info">
                        <div className="name">
                            <NavLink to={"/movie"}>
                                {movieName || <Skeleton width={475} />}
                            </NavLink>
                        </div>
                        <div className="year">
                            {movieYear || <Skeleton width={100} />}
                        </div>
                        <div className="genre">
                            {genreStr || <Skeleton width={250} />}
                        </div>
                        <div className="plot">
                            {movieTagline || <Skeleton count={4} />}
                        </div>
                    </div>

                    <div
                        className="reccom-ele reccom-ele-poster"
                        onClick={handleDeatilsClick}
                    >
                        {moviePoster && (
                            <NavLink to={"/movie"}>
                                <img src={moviePoster} alt="" />
                            </NavLink>
                        )}

                        {!moviePoster && (
                            <Skeleton
                                width={250}
                                height={350}
                                baseColor="#404040"
                                highlightColor="#525252"
                            />
                        )}
                    </div>
                </div>
            </SkeletonTheme>
        </>
    );
}
