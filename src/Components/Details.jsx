import React from "react";
import "../CSS/Details.css";
import movieJson from "../docs/movie.json";
import poster from "../img/spider-man ATSV.jpg";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Details({ apiData }) {
	const [movieData, setMovieData] = useState();
	const [isLoading, changeLoadState] = useState(true);

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
		moviePlot,
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
		moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
		movieBackdrop = IMG_PATH + apiData["results"][index]["backdrop_path"];
		movieName = apiData["results"][index]["original_title"];
		movieDate = apiData["results"][index]["release_date"];
		movieYear = movieDate.substring(0, 4);
		moviePlot = apiData["results"][index]["overview"];
	}

	// // fetching and proccessing movie data
	if (movieData) {
		let movieGenre = movieData["genres"];
		let movie_genre = [];
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
			<SkeletonTheme baseColor="#404040" highlightColor="#525252">
				<div className="reccom-container">
					<div className="reccom-ele reccom-ele-info">
						<div className="name">
							{movieName || <Skeleton width={475} />}
						</div>
						<div className="year">
							{movieYear || <Skeleton width={100} />}
						</div>
						<div className="genre">
							{genreStr || <Skeleton width={250} />}
						</div>
						<div className="plot">
							{moviePlot || <Skeleton count={4} />}
						</div>
					</div>

					<div className="reccom-ele reccom-ele-poster">
						{moviePoster && <img src={moviePoster} alt="" />}

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
