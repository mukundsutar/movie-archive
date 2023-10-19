import React, { useEffect, useState } from "react";
import "../CSS/Tile.css";
import { NavLink } from "react-router-dom";

export default function Tile({ index, apiData, setMovieID }) {
	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";

	let moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
	let movieName = apiData["results"][index]["title"];
	let movieDate = apiData["results"][index]["release_date"];
	movieDate = movieDate.substring(0, 4);
	let movieID= apiData["results"][index]["id"];

	// send id
	useEffect(() => {
		setMovieID(apiData["results"][index]["id"]);
	}, []);

	return (
		<>
			<div id={movieID} className="tile-container" onClick={setMovieID}>
				<NavLink
					className="navlink-tile"
					to={"/page"}
					style={{ textDecoration: "none" }}
				>
					<div className="tile-poster">
						<img src={moviePoster} alt="" />
					</div>
					<div className="tile-name">{movieName}</div>
					<div className="tile-year">{movieDate}</div>
				</NavLink>
			</div>
		</>
	);
}
