import React from "react";
import trollface from "../assets/Rage-Comics-Troll-Face-PNG-File.png";

export default function Header() {
  return (
    <header className="header-main">
      <img className="header-img" src={trollface} />
      <h3 className="header-title">Meme Generator</h3>
      <h4 className="header-project">React Project - Project 3</h4>
    </header>
  );
}
