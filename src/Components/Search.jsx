import React from "react";
import "../CSS/Search.css";
import { NavLink } from "react-router-dom";

export default function Search() {
	return (
		<>
			<div className="search">
				<form>
					<input
						className="search-input"
						type="text"
						placeholder="Quick search"
					/>
				</form>

				<div className="navbar">
					<div className="Home">
						<NavLink to={"/movie-archive"}>Home</NavLink>
					</div>

					<div className="popular">
						<NavLink to={"/popular"}>Popular</NavLink>
					</div>

					<div className="top-rated">
						<NavLink to={"/top-rated"}>Top Rated</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}
