import React from "react";
import Tile from "./Tile";
import "../CSS/Gallery.css";
import { useState, useEffect } from "react";

export default function Gallery({ apiData, setMovieID }) {
	const numberOfTiles = 20;
	const [movie_id, setMovieID] = useState("");
	console.log(movie_id);

	// send id
	useEffect(() => {
		setMovieID(apiData["results"][index]["id"]);
	}, []);

	// Create an array of JSX elements for the Tile components
	const tileElements = Array.from(
		{ length: numberOfTiles },
		(
			_,
			index, //_, and index optional
			data
		) => (
			<Tile
				key={index}
				index={index}
				apiData={apiData}
				setMovieID={setMovieID}
			/> // to provide a unique key for each Tile
		)
	);

	return (
		<>
			<div id="id-gallery-container" className="gallery-container">
				{tileElements}
			</div>
		</>
	);
}
