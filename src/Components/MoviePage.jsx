import React from "react";
import Header from "./Header";
import Details from "./Details";
import Info from "./Info";

export default function MoviePage({ apiData }) {
	return (
		<>
			<Header />

			<Details apiData={apiData} />

			<Info apiData={apiData} />
		</>
	);
}
