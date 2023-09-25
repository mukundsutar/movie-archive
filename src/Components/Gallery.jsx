import React from "react";
import Tile from "./Tile";
import "../CSS/Gallery.css";

export default function Gallery({ apiData }) {

	const numberOfTiles = 20;

	// Create an array of JSX elements for the Tile components
	const tileElements = Array.from(
		{ length: numberOfTiles },
		(
			_,
			index, //_, and index optional
			data
		) => (
			<Tile key={index} index={index} apiData={apiData} /> // to provide a unique key for each Tile
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
