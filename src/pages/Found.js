import React from "react";
import '../styling/App.css';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro"
// import CarIntro from "../components/CarouselIntro";
import Forms from "../components/forms"
import SimpleSlider from "../components/CarouserLostPosts";

function App () {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    {/* <CarIntro/> */}
    <Forms/>
    <SimpleSlider/>
    </div>  
  );
}

export default App;
