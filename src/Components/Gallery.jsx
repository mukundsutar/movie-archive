import React from "react";
import Tile from "./Tile";
import "../CSS/Gallery.css";

export default function Gallery(){
  return (
    <>
      <div className="gallery-container">
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
      </div>
    </>
  );
}
