import React from "react";
import "../CSS/Tile.css";
import poster from "../img/spider-man ATSV.jpg";

export default function Tile() {
	return (
		<>
			<div className="tile-container">
				<div className="tile-poster">
					<img src={poster} alt="" />
				</div>
				<div className="tile-name">Name</div>
				<div className="tile-year">Year</div>
			</div>
		</>
	);
}
