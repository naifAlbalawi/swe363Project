import React from "react";
import '../styling/App.css';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro"
import CarIntro from "../components/CarouselIntro";
// import Forms from "../components/forms"
// import SimpleSlider from "../components/CarouserLostPosts";

function App () {
  const text = "About Us";
  return (
    <div className="App">
    <Navbar />
    <Intro text={text} />
    <CarIntro/>
    {/* <Forms/>
    <SimpleSlider/> */}
    </div>  
  );
}

export default App;
