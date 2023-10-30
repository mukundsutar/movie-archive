import React, { useEffect } from "react";
import "../CSS/Header.css";
import Search from "./Search";
import redLogoTransparent from "../img/FilmPedia-logos-transparent-red.png";
import redLogo from "../img/FilmPedia-logos-red.jpeg";
import whiteLogoTransparent from "../img/FilmPedia-logos-transparent-white.png";
import whiteLogo from "../img/FilmPedia-logos-white.jpeg";
import { NavLink } from "react-router-dom";

export default function Header() {
	function setLOTR() {
		localStorage.setItem("id", 122);
	}

	return (
		<>
			<div className="header-container">
				<div className="logo">
					<NavLink to={"/movie-archive"}>
						<img src={whiteLogoTransparent} alt="" srcSet="" />
					</NavLink>
				</div>

				<div className="title">
					<NavLink to={"/movie"} onClick={setLOTR}>
						One Database to Rule theme All!
					</NavLink>
				</div>
				<Search />
			</div>
		</>
	);
}
