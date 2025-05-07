import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Relatos de Papel</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;