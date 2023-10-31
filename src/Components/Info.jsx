import React from "react";
import "../CSS/Info.css";
import movieJson from "../docs/movie.json";
import { useState, useEffect } from "react";
import Details from "./Details";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Info() {
	const [movieData, setMovieData] = useState();

	let currID = localStorage.getItem("id");

	useEffect(() => {
		async function fetchMovieAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/movie/" +
					currID +
					"?language=en-US&api_key=" +
					process.env.REACT_APP_API_KEY
			);
			const data = await url.json();

			setMovieData(data);
		}

		fetchMovieAPI();
	}, [currID]);

	return (
		<>
			<Details movieInfoData={movieData} />

			<SkeletonTheme baseColor="#404040" highlightColor="#525252">
				{movieData && (
					<div className="info-container-2">
						<div className="info-2-ele">
							{movieData.overview || <Skeleton width={100} />}
						</div>

						<br />

						<div className="info-2-ele">
							Audience Score: {" "}
							{movieData.vote_average || <Skeleton width={100} />}
						</div>
					</div>
				)}

				{!movieData && (
					<div className="info-container-2">
						<div className="info-2-ele">
							<Skeleton count={5} />
						</div>
						<br />

						<div className="info-2-ele">
							<Skeleton width={100} />
						</div>
					</div>
				)}
			</SkeletonTheme>
		</>
	);
}
