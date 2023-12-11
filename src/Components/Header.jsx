import React, { useEffect } from "react";
import "../CSS/Header.css";
import Search from "./Search";
import redLogoTransparent from "../img/FilmPedia-logos-transparent-red.png";
import redLogo from "../img/FilmPedia-logos-red.jpeg";
import whiteLogoTransparent from "../img/FilmPedia-logos-transparent-white-cropped.png";
import whiteLogo from "../img/FilmPedia-logos-white.jpeg";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="logo">
                    <NavLink to={"/"}>
                        <img src={whiteLogoTransparent} alt="" srcSet="" />
                    </NavLink>
                </div>

                <MediaQuery maxWidth={650}>
                    <div className="title"></div>
                </MediaQuery>

                <MediaQuery minWidth={651}>
                    <div className="title">
                        <NavLink to={"/movie"}>
                            One Database to Rule theme All!
                        </NavLink>
                    </div>
                </MediaQuery>
                <Search />
            </div>
        </>
    );
}
