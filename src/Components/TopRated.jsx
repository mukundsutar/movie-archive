import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PageSeek from "../Components/PageSeek";
import Gallery from "../Components/Gallery";
import popularJson from "../docs/popular.json";

export default function TopRated({ apiKey }) {
	const [apiData, setAPIData] = useState(popularJson);
	const [pageNo, setPageNo] = useState(1);

	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=" +
					pageNo +
					"&api_key=" +
					apiKey
			);
			const data = await url.json();

			setAPIData(data);
		}

		fetchMyAPI();
	}, [pageNo]);

	

	return (
		<>
			<Gallery apiData={apiData} />
			<PageSeek pageNo={pageNo} setPageNo={setPageNo} />
		</>
	);
}
