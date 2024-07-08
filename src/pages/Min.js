import React from "react";
import "./main.css";
import "../woman.png";
import "../man.png";
export default function Main(params) {
  return (
    <div className="maindiv">
      <h1 className="mainh1">
        Discover <span className="focus"> Timeless Beauty</span>
      </h1>
      <div className="mindiv">
        <div className="mimmimdiv1">
          <h2 className="mainh2">
            <span className="focus">Fresh Looks</span> For
            <br />
            The Modern Classic
          </h2>
          <p className="discover">
            Discover the perfect fusion of classic charm and modern trends. Our
            new collection offers fresh looks that embody sophistication and
            style, ideal for the discerning fashionista who values both
            tradition and innovation
          </p>
        </div>
        <div className="minidiv2">
          <img src="./woman.png" className="image1" alt="" />
        </div>
      </div>
      <div className="mindiv">
        <div className="mindiv2">
          <img src="./man.png" className="image2" alt="" />
        </div>
        <div className="minidiv2">
          <h2 className="mainh3">
            <span className="focuss">Stand Out</span> In Style
          </h2>
          <p className="make">
            Make a statement with our bold and stylish collection. Designed for
            those who dare to be different, our pieces blend contemporary trends
            with unique designs.
          </p>
        </div>
      </div>
    </div>
  );
}
