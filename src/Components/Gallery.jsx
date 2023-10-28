import React, { useEffect } from "react";
import Tile from "./Tile";
import "../CSS/Gallery.css";

export default function Gallery({ apiData }) {
	// Create an array of JSX elements for the Tile components
	let numberOfTiles = 20;
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
