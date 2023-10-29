import React from "react";
import "../CSS/Details.css";
import movieJson from "../docs/movie.json";
import poster from "../img/spider-man ATSV.jpg";
import { useState, useEffect } from "react";

export default function Details({ apiData }) {
	const [movieData, setMovieData] = useState(movieJson);

	// algorith to find most popular movie currently
	let max = Number.MIN_SAFE_INTEGER;
	let index = 0;
	let combinedScore = 0;

	for (let i = 0; i < apiData["results"].length; i++) {
		let popularity = apiData["results"][i]["popularity"];
		let averageVotes = apiData["results"][i]["vote_average"];

		let normPopularity = (popularity - 0) / (5000 - 0);
		let normAVGVotes = (averageVotes - 0) / (10 - 0);
		combinedScore = (normPopularity + normAVGVotes * 3) / 2;

		console.log(combinedScore);
		if (combinedScore > max) {
			max = combinedScore;
			index = i;
		}
	}

	console.log(apiData["results"][index]["original_title"] + " " + max);

	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";
	let movieID = apiData["results"][index]["id"];
	let moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
	let movieBackdrop = IMG_PATH + apiData["results"][index]["backdrop_path"];
	let movieName = apiData["results"][index]["original_title"];
	let movieDate = apiData["results"][index]["release_date"];
	let movieYear = movieDate.substring(0, 4);
	let moviePlot = apiData["results"][index]["overview"];
	let movieGenre = movieData["genres"];

	// // fetching and proccessing movie data
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

	return (
		<>
			<div className="reccom-container">
				<div className="reccom-ele reccom-ele-info">
					<div className="name">{movieName}</div>
					<div className="year">{movieYear}</div>
					<div className="genre">{genreStr}</div>
					<div className="plot">{moviePlot}</div>
				</div>
				<div className="reccom-ele reccom-ele-poster">
					<img src={IMG_PATH + moviePoster} alt="" />
				</div>
			</div>
		</>
	);
}
