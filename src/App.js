import { Router, Routes } from "react-router-dom";
import "./App.css";
import Timberclouds from "./pages/Timber";

function App() {
  return (
    <Router>
      <Routes>
        <Routes path="/" element={<Timberclouds />} />
      </Routes>
    </Router>
  );
}

export default App;
