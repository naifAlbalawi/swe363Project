import Navbar from "./Navbar";
import React from "react";
import Intro from "./Intro"
import CarIntro from "./CarouselIntro";
import Forms from "./forms"
import SimpleSlider from "./CarouserLostPosts";

import '../styling/App.css';

function App() {
  return (
    <div className="App">
      
    <Navbar />
    <Intro />
    <CarIntro/>
    <Forms/>
    <SimpleSlider/>
    </div>  
  );
}

export default App;
