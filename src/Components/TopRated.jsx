import React, { useState, useEffect } from "react";
import PageSeek from "../Components/PageSeek";
import Gallery from "../Components/Gallery";
import popularJson from "../docs/popular.json";

export default function TopRated() {
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

	return (
		<>
			<Gallery apiData={apiData} />
			<PageSeek pageNo={pageNo} setPageNo={setPageNo} />
		</>
	);
}
