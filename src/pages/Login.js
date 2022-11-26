import React from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Login from "../components/login"
// import CarIntro from "../components/CarouselIntro";
// import Forms from "../components/forms"
// import SimpleSlider from "../components/CarouserLostPosts";


function App() {
  const text = "Login";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      <Login />
      {/* <CarIntro/>
    <Forms/>
    <SimpleSlider/> */}
    </div>
  );
}

export default App;
