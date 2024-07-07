import React from "react";
import "./Head.css";
export default function Head() {
  return (
    <div className="head">
      <div className="navbar">
        <div className="logodiv">
          <p className="logo">TimbuCloud</p>
          <p className="minilogo">PM</p>
          <div className="navbarmini">
            <a href="/">Home</a>
            <a href="/">Shop</a>
          </div>
        </div>
      </div>
    </div>
  );
}
