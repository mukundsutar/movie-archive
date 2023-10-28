import "../CSS/Tile.css";
import { NavLink } from "react-router-dom";

export default function Tile({ index, apiData}) {

	let IMG_PATH = "https://image.tmdb.org/t/p/w1280";

	let moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
	let movieName = apiData["results"][index]["title"];
	let movieDate = apiData["results"][index]["release_date"];
	movieDate = movieDate.substring(0, 4);
	let movieID = apiData["results"][index]["id"];

	// send id
	const sendID = () => {
		console.log(movieID);

		fetch(movieID).then(localStorage.setItem("id", movieID));
	};

	return (
		<>
			<div id={movieID} className="tile-container" onClick={sendID}>
				<NavLink
					className="navlink-tile"
					to={"/movie"}
					style={{ textDecoration: "none" }}
				>
					<div className="tile-poster">
						<img src={moviePoster} alt="" />
					</div>
					<div className="tile-name">{movieName}</div>
					<div className="tile-year">{movieDate}</div>
				</NavLink>
			</div>
		</>
	);
}
