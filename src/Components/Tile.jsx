import React, { useState } from "react";
import "../CSS/Tile.css";
import poster from "../img/spider-man ATSV.jpg";
import { Routes, Route } from "react-router-dom";

export default function Tile({ index, apiData, movieIDCB }) {
	function selectTile() {
		movieIDCB(movieID)
	}
	
	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";
	
	let movieID = apiData["results"][index]["id"];
	let moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
	let movieName = apiData["results"][index]["title"];
	let movieDate = apiData["results"][index]["release_date"];
	movieDate = movieDate.substring(0, 4);

	return (
		<>
			<div id={movieID} className="tile-container" onClick={selectTile}>
				<div className="tile-poster">
					<img src={moviePoster} alt="" />
				</div>
				<div className="tile-name">{movieName}</div>
				<div className="tile-year">{movieDate}</div>
			</div>
		</>
	);
}
