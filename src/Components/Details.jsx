import React from "react";
import "../CSS/Details.css";
import poster from "../img/spider-man ATSV.jpg";

export default function Details({ apiData }) {
	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";

	let movieID = apiData["results"][0]["id"];
	let moviePoster = IMG_PATH + apiData["results"][0]["poster_path"];
	let movieName = apiData["results"][0]["title"];
	let movieDate = apiData["results"][0]["release_date"];

	// let movieGenre = [];
	// for (let i = 0; i < apiData["genres"].length; i++) {
	// 	movieGenre.push(apiData["genres"][i]["name"]);
	// }

	// let genreStr = "";
	// for (let i = 0; i < movieGenre.length; i++) {
	// 	genreStr = genreStr.concat(movieGenre[i]);
	// 	if (i < movieGenre.length - 1) {
	// 		genreStr = genreStr.concat(" / ");
	// 	}
	// }

	let movieYear = movieDate.substr(0, 4);

	return (
		<>
			<div className="reccom-container">
				<div className="reccom-ele reccom-ele-info">
					<div className="name">{movieName}</div>
					<div className="year">{movieYear}</div>
					<div className="genre">{/* {genreStr} */}</div>
					<div className="plot">Plot</div>
				</div>
				<div className="reccom-ele reccom-ele-poster">
					<img src={IMG_PATH + moviePoster} alt="" />
				</div>
			</div>
		</>
	);
}
