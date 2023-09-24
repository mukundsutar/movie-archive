import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";
import TMDB from "./Components/TMDB";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
	const [apiData, setAPIData] = useState();

	let API_KEY = "?api_key=7c7034e65c22ade9db6191d62074a4e0";

	const fetchAPIData = async () => {
		const url = await fetch(
			"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1"
		);
		const data = await url.json();

		console.log(data);

		setAPIData(data);
	};

	document.addEventListener("DOMContentLoaded", (event) => {
		console.log("DOM fully loaded and parsed");
		fetchAPIData();
	});

	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							{" "}
							<Details />
							<Gallery data={apiData} />
						</>
					}
				/>

				<Route
					path="/popular"
					element={
						<>
							<Details />
						</>
					}
				/>

				<Route
					path="/top-rated"
					element={
						<>
							{" "}
							<Details />
							<Gallery />
						</>
					}
				/>
			</Routes>

			<TMDB />
		</>
	);
}
