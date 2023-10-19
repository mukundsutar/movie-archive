import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";
import TMDB from "./Components/TMDB";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import popularJson from "./docs/popular.json";
import movieJson from "./docs/movie.json";
import MoviePage from "./Components/MoviePage";
import Info from "./Components/Info";

export default function App() {
	const [apiData, setAPIData] = useState(popularJson);
	const [movieData, setMovieData] = useState(movieJson);
	const [movie_id, getMovieID] = useState("");

	const API_KEY = "7c7034e65c22ade9db6191d62074a4e0";

	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/discover/movie?\\page=1&sort_by=popularity.desc&api_key=" +
					API_KEY
			);
			const data = await url.json();

			setAPIData(data);
		}

		fetchMyAPI();
	}, []);

	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/movie/575264?language=en-US&api_key=" +
					API_KEY
			);
			const data = await url.json();

			setMovieData(data);
		}

		fetchMyAPI();
	}, []);

	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							{" "}
							<Details apiData={apiData} />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/popular"
					element={
						<>
							<Details apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/top-rated"
					element={
						<>
							{" "}
							<Details apiData={apiData} />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/page"
					element={
						<>
							<Info movieData={movieData} />
						</>
					}
				/>
			</Routes>

			<TMDB />
		</>
	);
}
