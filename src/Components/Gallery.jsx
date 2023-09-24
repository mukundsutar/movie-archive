import React from "react";
import Tile from "./Tile";
import "../CSS/Gallery.css";

export default function Gallery(data) {
	// console.log(data);

	const numberOfTiles = 12; // Change this to the number of tiles you want

	// Create an array of JSX elements for the Tile components
	const tileElements = Array.from({ length: numberOfTiles }, (_, index) => ( //_, and index optional
		<Tile key={index} /> // Make sure to provide a unique key for each Tile
	));

	return (
		<>
			<div id="id-gallery-container" className="gallery-container">
				{tileElements}
			</div>
		</>
	);
}
