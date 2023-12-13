import React, { useEffect } from "react";
import "../CSS/Header.css";
import Search, { navbarClicker } from "./Search";
import whiteLogoTransparent from "../img/FilmPedia-logos-transparent-white-cropped.png";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useAtom } from "jotai";
import Navbar from "./Navbar";

export default function Header() {
    const [navbarClick] = useAtom(navbarClicker);

    

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
                        <NavLink to={"/movie"} >
                            One Database to Rule theme All!
                        </NavLink>
                    </div>
                </MediaQuery>
                <Search />
            </div>
            {navbarClick && <Navbar />}
        </>
    );
}
