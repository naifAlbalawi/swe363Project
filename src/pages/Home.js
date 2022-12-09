import React, { useEffect } from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import CarIntro from "../components/CarouselIntro";
import Forms from "../components/forms";
import SimpleSlider from "../components/CarouserLostPosts";
import { auth } from "../components/fb";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  });
  const text = "Trying to save what KFUPM students and staff lost";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      <CarIntro />
      <Forms />
      <SimpleSlider />
    </div>
  );
}

export default App;
