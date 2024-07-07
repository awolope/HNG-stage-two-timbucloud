import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import { FaInfinity } from "react-icons/fa";

import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./Head.css";
import "../background.png";
import SearchBar from "./Serach";
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
          <div className="minibar3"></div>
          <SearchBar />
          <FaShoppingCart
            style={{ fontSize: "24px", color: "red" }}
            className="cart"
          />
        </div>
      </div>
      <h1 className="h1head">Eternal Classics, Enduring Style</h1>
      <h2 className="h3head">
        From elegant dresses to tailored suits, find pieces that stand the test
        of time
      </h2>
      <div className="shopdiv">
        <a href="#" className="shoplink">
          {" "}
          Shop Now
        </a>
        <FaArrowUp className="arrowup" />
      </div>
      <div className="clockdiv">
        <div>
          <FaClock className="clock" />
          <p className="daily">Daily Arrivals</p>
        </div>
        <div>
          <FaInfinity className="infinity" />{" "}
          <p className="hassle">Hassle Free Shopping</p>
        </div>
        <div>
          <FaShoppingBag className="shoppingbag" />
          <p className="unlimited"> Unllimited Items</p>
        </div>
      </div>
    </div>
  );
}
