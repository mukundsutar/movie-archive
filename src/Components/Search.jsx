import React from "react";
import "../CSS/Search.css";

export default function Search() {
	return (
		<>
			<div className="search">
				<form>
					<input className="search-input" type="text" placeholder="Quick search"/>
				</form>

				<div className="navbar">
					<div className="Home">Home</div>
					<div className="popular">Popular</div>
					<div className="top-rated">Top Rated</div>
				</div>
			</div>
		</>
	);
}
