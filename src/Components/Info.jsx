import React from "react";
import Details from "./Details";

export default function Info({ apiData }) {
	console.log(window.location.href);

	return (
		<>
			<Details apiData={apiData} />
			<div className="info-container">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
				omnis aliquid debitis repellendus dolore, rerum perspiciatis
				corporis consequuntur, temporibus, explicabo aperiam libero
				tempore quasi?
			</div>
		</>
	);
}
