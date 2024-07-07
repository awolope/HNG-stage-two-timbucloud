import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TimbuClouds from "./pages/TimbuCloud";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimbuClouds />} />
      </Routes>
    </Router>
  );
}

export default App;
