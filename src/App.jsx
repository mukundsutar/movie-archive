import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";
import TMDB from "./Components/TMDB";
import { Routes, Route, Navigate, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Info from "./Components/Info";
import TopRated from "./Components/TopRated";
import LoadingBar from "react-top-loading-bar";
import Timer from "./Components/Timer";
import "react-loading-skeleton/dist/skeleton.css";
import Attribution from "./Components/Attribution";
import LoginPage, { loginState } from "./Components/LoginPage";
import { useAtom } from "jotai";

export default function App() {
    const [progress, setProgress] = useState(0);
    const [apiData, setAPIData] = useState();

    // popular
    useEffect(() => {
        async function fetchMyAPI() {
            const url = await fetch(
                "https://api.themoviedb.org/3/discover/movie?\\page=1&sort_by=popularity.desc&api_key=" +
                    process.env.REACT_APP_API_KEY
            );
            const data = await url.json();

            setAPIData(data);
        }

        fetchMyAPI();
    }, []);

    const [loginStateCheck] = useAtom(loginState);

    console.log(loginStateCheck);

    return (
        <>
            <LoadingBar
                color="#e2e2e2"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                transitionTime={300}
                waitingTime={700}
                loaderSpeed={500}
            />

            <Header />

            <Routes>
                <Route
                    path="/login"
                    element={
                        <>
                            <Timer setProgress={setProgress} />
                            <LoginPage />
                        </>
                    }
                />

                <Route
                    path="/"
                    element={
                        <>
                            {!loginStateCheck && (
                                <Navigate exact from="/" to="/login" />
                            )}
                            {loginStateCheck && (
                                <Navigate exact from="/login" to="/" />
                            )}
                            <Timer setProgress={setProgress} />
                            <Details apiData={apiData} />
                            <Gallery apiData={apiData} />
                        </>
                    }
                />

                <Route
                    path="/movie-archive"
                    element={
                        <>
                            <Navigate
                                exact
                                from="/movie-archive/movie-archive"
                                to="/movie-archive"
                            />{" "}
                            <Timer setProgress={setProgress} />
                            <Details apiData={apiData} />
                            <Gallery apiData={apiData} />
                        </>
                    }
                />

                <Route
                    path="/popular"
                    element={
                        <>
                            <Timer setProgress={setProgress} />
                            <Gallery apiData={apiData} />
                        </>
                    }
                />

                <Route
                    path="/top-rated"
                    element={
                        <>
                            <Timer setProgress={setProgress} />
                            <TopRated />
                        </>
                    }
                />

                <Route
                    path="/movie"
                    element={
                        <>
                            <Info />
                        </>
                    }
                />
            </Routes>

            <Attribution />

            {/* <TMDB /> */}
        </>
    );
}
