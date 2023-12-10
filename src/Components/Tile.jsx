import "../CSS/Tile.css";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { atom, useAtom } from "jotai";

export const currMovieID = atom(122);

export default function Tile({ index, apiData }) {
    const [currMovieIDj, setCurrMovieIDj] = useAtom(currMovieID);

    let IMG_PATH = "https://image.tmdb.org/t/p/w1280";

    let moviePoster, movieName, movieDate, movieID;

    if (apiData !== undefined) {
        moviePoster = IMG_PATH + apiData["results"][index]["poster_path"];
        movieName = apiData["results"][index]["title"];
        movieDate = apiData["results"][index]["release_date"];
        movieDate = movieDate.substring(0, 4);
        movieID = apiData["results"][index]["id"];
    }

    // send id
    const sendID = () => {
		setCurrMovieIDj(movieID)

        console.log(movieID);

        // fetch(movieID).then(localStorage.setItem("id", movieID));
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
                        {moviePoster && <img src={moviePoster} alt="" />}

                        {!moviePoster && (
                            <Skeleton
                                width={150}
                                height={225}
                                baseColor="#404040"
                                highlightColor="#525252"
                            />
                        )}
                    </div>
                    <div className="tile-name">
                        {movieName || (
                            <Skeleton
                                width={150}
                                height={15}
                                baseColor="#404040"
                                highlightColor="#525252"
                            />
                        )}
                    </div>
                    <div className="tile-year">
                        {movieDate || (
                            <Skeleton
                                width={80}
                                height={10}
                                baseColor="#404040"
                                highlightColor="#525252"
                            />
                        )}
                    </div>
                </NavLink>
            </div>
        </>
    );
}
