import React from "react";
import "./main.css";
import ReactDOM from "react-dom";

export default function Main(params) {
  return (
    <div className="maindiv">
      <h1 className="mainh1">
        Discover <span className="focus"> Timeless Beauty</span>
      </h1>
      <div className="mindiv1">
        <div className="mimmimdiv1">
          <h2 className="mainh2">
            <span className="focus">Fresh Looks</span> For The Modern Classic
          </h2>
          <p className="discover">
            Discover the perfect fusion of classic charm and modern trends. Our
            new collection offers fresh looks that embody sophistication and
            style, ideal for the discerning fashionista who values both
            tradition and innovation
          </p>
        </div>
        <div className="minidiv2"></div>
      </div>
    </div>
  );
}
