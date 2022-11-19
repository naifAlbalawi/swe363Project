import React from "react";
import '../styling/App.css';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro"
import CarIntro from "../components/CarouselIntro";
import Forms from "../components/forms"
import SimpleSlider from "../components/CarouserLostPosts";
import { useOutletContext } from "react-router-dom";

function App () {
  const obj = useOutletContext()
  return (
    <div className="App">
    <Navbar />
    <Intro value = "Trying to save what KFUPM students and staff lost"/>
    <CarIntro/>
    <Forms/>
    <SimpleSlider/>
    </div>  
  );
}

export default App;

