import React, { useEffect, useState } from "react";
import "../CSS/PageSeek.css";

export default function PageSeek({ pageNo, setPageNo }) {
	// disable buttons
	useEffect(() => {
		let buttonPrevEle = document.getElementById("prev");
		let buttonNextEle = document.getElementById("next");
		if (pageNo == 1) {
			buttonPrevEle.classList.remove("btn41-43", "btn-41");
			buttonPrevEle.style.visibility = "hidden";
		} else if (pageNo == 2) {
			// buttonPrevEle.classList.add("btn41-43", "btn-41");
			buttonPrevEle.style.visibility = "visible";
		} else if (pageNo == 445) {
			// buttonNextEle.classList.remove("btn41-43", "btn-41");
			buttonNextEle.style.visibility = "hidden";
		} else if (pageNo == 444) {
			// buttonNextEle.classList.add("btn41-43", "btn-41");
			buttonNextEle.style.visibility = "visible";
		}
	}, [pageNo]);

	// update pageNo
	const previousPage = () => {
		if (pageNo > 1) {
			setPageNo(pageNo - 1);
		}
	};

	const nextPage = () => {
		if (pageNo < 445) {
			setPageNo(pageNo + 1);
		}
	};

	return (
		<>
			<div className="page-seek-container">
				<button
					id="prev"
					className="btn btn-prev btn41-43 btn-41"
					onClick={previousPage}
				>
					Previous Page
				</button>

				<div className="current-page-number">{pageNo}</div>

				<button
					id="next"
					className="btn btn-next btn41-43 btn-41"
					onClick={nextPage}
				>
					Next Page
				</button>
			</div>
		</>
	);
}
