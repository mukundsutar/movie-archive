import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";
import TMDB from "./Components/TMDB";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import popularJson from "./docs/popular.json";
import movieJson from "./docs/movie.json";
import MoviePage from "./Components/MoviePage";
import Info from "./Components/Info";
import PageSeek from "./Components/PageSeek";
import TopRated from "./Components/TopRated";

export default function App() {
	const [apiData, setAPIData] = useState(popularJson);

	const API_KEY = "7c7034e65c22ade9db6191d62074a4e0";

	// popular
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

	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							{" "}
							<Navigate exact from="/movie-archive" to="/" />
							<Details apiData={apiData} />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/movie-archive"
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
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/top-rated"
					element={
						<>
							<TopRated apiKey={API_KEY} />
						</>
					}
				/>

				<Route
					path="/movie"
					element={
						<>
							<Info />
						</>
					}
				/>
			</Routes>

			<TMDB />
		</>
	);
}
