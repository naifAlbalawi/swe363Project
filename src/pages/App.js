import React from "react";
import "../styling/App.css";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Login from "./Login";
import Signup from "./Signup";
import Posts from "./Posts";
import Found from "./Found";
import Lost from "./Lost";

import { Routes, Route, useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams({id:"", found:false, lost:false})
  const params = [searchParams.get("id"), searchParams.get("found"), searchParams.get("lost")]
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/found" element={<Found />} />
      <Route path="/lost" element={<Lost />} />
      <Route path="/login" element={<Login />} />\
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
