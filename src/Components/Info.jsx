import React from "react";
import "../CSS/Info.css";
import movieJson from "../docs/movie.json";
import languageCodes from "../docs/language-codes.json";
import { useState, useEffect } from "react";
import Details from "./Details";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Info() {
	const [movieData, setMovieData] = useState();
	const [movieKeyword, setMovieKeyword] = useState();

	let currID = localStorage.getItem("id");
	let movieLang;

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

		async function fetchKeywordAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/movie/" +
					currID +
					"/keywords?language=en-US&api_key=" +
					process.env.REACT_APP_API_KEY
			);
			const data = await url.json();

			setMovieKeyword(data);
		}

		fetchMovieAPI();
		fetchKeywordAPI();
	}, [currID]);

	if (movieData) {
		languageCodes.language.map((index) => {
			if (index.code == movieData.original_language) {
				movieLang = index.name;
			}
		});
	}

	return (
		<>
			<Details movieInfoData={movieData} />

			<SkeletonTheme baseColor="#404040" highlightColor="#525252">
				{movieData && (
					<div className="info-container-2">
						<div className="info-2-ele">
							Overview: <br />
							{movieData.overview || <Skeleton width={100} />}
						</div>

						<br />
						<br />

						<div className="info-2-ele">
							Status: {movieData.status}
						</div>

						{movieData.budget != 0 && (
							<div className="budget-container">
								<br />
								<br />

								<div className="info-2-ele">
									Budget: ${movieData.budget} &#40;USD&#41;
								</div>

								<br />
								<br />

								<div className="info-2-ele">
									Revenue: ${movieData.revenue} &#40;USD&#41;
								</div>
							</div>
						)}

						<br />
						<br />

						{movieData && (
							<div className="info-2-ele">
								Original Language: {movieLang}
							</div>
						)}

						<br />
						<br />

						<div className="info-2-ele">
							Audience Score:{" "}
							{Math.round(movieData.vote_average * 10) / 10 || (
								<Skeleton width={100} />
							)}
						</div>

						<br />
						<br />

						<div className="info-2-keyword">
							<h3>Keywords:</h3>

							{movieKeyword &&
								movieKeyword.keywords.map((word) => (
									<span
										className="info-2-container-words"
										key={word.id}
									>
										<span className="info-2-word">
											#{word.name}
										</span>
										&nbsp;
									</span>
								))}
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

						<div className="info-2-ele">
							<Skeleton width={100} />
						</div>

						<div className="info-2-ele">
							<Skeleton width={100} />
						</div>

						<div className="info-2-ele">
							<Skeleton width={100} />
							<div className="keyword-skeleton">
								{Array.from(
									{ length: Math.random() * (10 - 5) + 5 },
									(index) => (
										<Skeleton
											key={index}
											className="word-skeleton"
											width={
												Math.random() * (150 - 80) + 80
											}
											height={30}
										/>
									)
								)}
							</div>
						</div>
					</div>
				)}
			</SkeletonTheme>
		</>
	);
}
