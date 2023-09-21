import React from "react";
import "../CSS/Details.css";
import poster from "../img/spider-man ATSV.jpg";

export default function Details() {
	return (
		<>
			<div className="reccom-container">
				<div className="reccom-ele reccom-ele-info">
					<div className="name">Name</div>
					<div className="year">Year</div>
					<div className="genre">Genre</div>
					<div className="plot">Plot</div>
				</div>
				<div className="reccom-ele reccom-ele-poster">
					<img src={poster} alt="" />
				</div>
			</div>
		</>
	);
}
