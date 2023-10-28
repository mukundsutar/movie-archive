import React from "react";
import "../CSS/Info.css";
import movieJson from "../docs/movie.json";
import { useState, useEffect } from "react";

export default function Info() {
	const [movieData, setMovieData] = useState(movieJson);

	let currID = localStorage.getItem("id");

	const API_KEY = "7c7034e65c22ade9db6191d62074a4e0";

	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/movie/" +
					currID +
					"?language=en-US&api_key=" +
					API_KEY
			);
			const data = await url.json();

			setMovieData(data);
		}

		fetchMyAPI();
	}, [currID]);

	// poster path
	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";

	let moviePoster = IMG_PATH + movieData["poster_path"];
	let movieBackdrop = IMG_PATH + movieData["backdrop_path"];
	let movieName = movieData["original_title"];
	let movieYear = movieData["release_date"];
	let movieTagline = movieData["tagline"];
	let moviePlot = movieData["overview"];
	let movieGenre = movieData["genres"];

	// trim movie date year
	movieYear = movieYear.substring(0, 4);

	// fetching and proccessing movie data
	let movie_genre = [];
	for (let i = 0; i < movieGenre.length; i++) {
		movie_genre.push(movieData["genres"][i]["name"]);
	}

	let genreStr = "";
	for (let i = 0; i < movie_genre.length; i++) {
		genreStr = genreStr.concat(movie_genre[i]);
		if (i < movie_genre.length - 1) {
			genreStr = genreStr.concat(" / ");
		}
	}

	return (
		<>
			<div className="info-container reccom-container">
				<div className="reccom-ele reccom-ele-info">
					<div className="name">{movieName}</div>
					<div className="year">{movieYear}</div>
					<div className="genre">{genreStr}</div>
					<div className="plot">{movieTagline}</div>
				</div>

				<div className="reccom-ele reccom-ele-poster">
					<img src={moviePoster} alt="" />
				</div>
			</div>

			<div className="info-container-2">
				<div className="info-2-ele">{moviePlot}</div>

				<div className="info-2-ele">vote</div>
			</div>
		</>
	);
}
