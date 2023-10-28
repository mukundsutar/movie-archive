import React from "react";
import "../CSS/Details.css";
import poster from "../img/spider-man ATSV.jpg";
import { useState, useEffect } from "react";

export default function Details({ apiData }) {
	let random = Math.floor(Math.random() * 20);

	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";

	let movieID = apiData["results"][random]["id"];
	let moviePoster = IMG_PATH + apiData["results"][random]["poster_path"];
	let movieBackdrop = IMG_PATH + apiData["results"][random]["backdrop_path"];
	let movieName = apiData["results"][random]["title"];
	let movieDate = apiData["results"][random]["release_date"];
	let movieYear = movieDate.substring(0, 4);
	let moviePlot = apiData["results"][random]["overview"];

	let movieURL = "url(" + movieBackdrop + ")";

	return (
		<>
			<div
				className="reccom-container"
				style={{ backgroundImage: { movieURL } }}
			>
				<div className="reccom-ele reccom-ele-info">
					<div className="name">{movieName}</div>
					<div className="year">{movieYear}</div>
					<div className="genre">{/* {genreStr} */}</div>
					<div className="plot">{moviePlot}</div>
				</div>
				<div className="reccom-ele reccom-ele-poster">
					<img src={IMG_PATH + moviePoster} alt="" />
				</div>
			</div>
		</>
	);
}
