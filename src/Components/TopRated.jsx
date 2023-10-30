import React, { useState, useEffect } from "react";
import PageSeek from "../Components/PageSeek";
import Gallery from "../Components/Gallery";
import popularJson from "../docs/popular.json";

export default function TopRated({ setProgress }) {
	const [apiData, setAPIData] = useState(popularJson);
	const [pageNo, setPageNo] = useState(1);

	let API_KEY = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=" +
					pageNo +
					"&api_key=" +
					API_KEY
			);
			const data = await url.json();
			setAPIData(data);
		}

		fetchMyAPI();
	}, [pageNo]);

	// let totaltime = 500;
	// let time = totaltime / 5;
	// useEffect(() => {
	// 	setProgress(0);

	// 	setTimeout(() => {
	// 		setProgress(20);
	// 	}, time);

	// 	setTimeout(() => {
	// 		setProgress(40);
	// 	}, time * 2);

	// 	setTimeout(() => {
	// 		setProgress(60);
	// 	}, time * 3);

	// 	setTimeout(() => {
	// 		setProgress(80);
	// 	}, time * 4);

	// 	setTimeout(() => {
	// 		setProgress(100);
	// 	}, time * 5);
	// }, []);

	return (
		<>
			<Gallery apiData={apiData} />
			<PageSeek pageNo={pageNo} setPageNo={setPageNo} />
		</>
	);
}
