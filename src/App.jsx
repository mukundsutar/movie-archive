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
import LoadingBar from "react-top-loading-bar";
import Timer from "./Components/Timer";

export default function App() {
	const [progress, setProgress] = useState(0)
	const [apiData, setAPIData] = useState(popularJson);

	// popular
	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/discover/movie?\\page=1&sort_by=popularity.desc&api_key=" +
					process.env.REACT_APP_API_KEY
			);
			const data = await url.json();

			setAPIData(data);
		}

		fetchMyAPI();
	}, []);

	return (
		<>
			<LoadingBar
				color="#e2e2e2"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}

				transitionTime={300}
				waitingTime={1000}
				loaderSpeed={1000}
			/>

			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							{" "}
							<Navigate exact from="/movie-archive" to="/" />
							<Timer setProgress={setProgress} />
							<Details apiData={apiData} />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/movie-archive"
					element={
						<>
							{" "}<Timer setProgress={setProgress} />
							<Details apiData={apiData} />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/popular"
					element={
						<><Timer setProgress={setProgress} />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/top-rated"
					element={
						<>
						<Timer setProgress={setProgress} />
							<TopRated />
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
