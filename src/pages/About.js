import React from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import CarIntro from "../components/CarouselIntro";

function App() {
  const text = "About Us";
  const text2 = "We are a group of students from KFUPM who are trying to help students and staff find their lost items.";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      <Intro text={text2} />
      <CarIntro />
    </div>
  );
}

export default App;
