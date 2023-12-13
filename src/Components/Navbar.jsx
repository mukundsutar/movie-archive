import { useAtom } from "jotai";
import React from "react";
import { navbarClicker } from "./Search";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [navbarClick] = useAtom(navbarClicker);
    return (
        <>
            <div className="res-navbar">
                <div className="Home">
                    <NavLink to={"/"}>Home</NavLink>
                </div>

                <div className="popular">
                    <NavLink to={"/popular"}>Popular</NavLink>
                </div>

                <div className="top-rated">
                    <NavLink to={"/top-rated"}>Top Rated</NavLink>
                </div>
            </div>
        </>
    );
}
