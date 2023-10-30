import React from "react";
import tmdb from "../img/TMDB-logo.svg";
import "../CSS/TMDB.css";

export default function TMDB() {
	return (
		<>
			<div className="tmdb-container" >
				<img src={tmdb} alt="" />
			</div>
		</>
	);
}
