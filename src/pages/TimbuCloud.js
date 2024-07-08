import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Timbucloud.css";
import Head from "./header";
import Main from "./Min";
export default function TimbuCloud() {
  return (
    <div>
      <header className="container-fluid">
        <Head />
        <Main />
      </header>
    </div>
  );
}
