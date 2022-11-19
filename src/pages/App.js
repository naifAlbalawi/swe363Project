import React from "react";
import "../styling/App.css";
import Home from "./Home";
import About from "./About";
import Lost from "./Lost";
import Found from "./Found";
import NotFound from "./NotFound"
import Login from "./Login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/found" element={<Found />} />
      <Route path="/lost" element={<Lost />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
