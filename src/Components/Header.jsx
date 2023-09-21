import React from "react";
import "../CSS/Header.css";
import Search from "./Search";

export default function Header() {
	return (
		<>
			<div className="header">
				<div className="logo">Logo</div>
				<div className="title">Title</div>
				<Search />
			</div>
		</>
	);
}
