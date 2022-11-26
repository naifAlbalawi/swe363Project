import React from "react";
import "../styling/App.css";
import "../styling/Card.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
// import CarIntro from "../components/CarouselIntro";
// import Forms from "../components/forms";
// import SimpleSlider from "../components/CarouserLostPosts";
import Card from "../components/Card";
import img from "../images/phone.png";

function App() {
  const text = "Found Item Posts";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      {/* <CarIntro/> */}
      {/* <Forms/> */}
      <Card
        title="Header"
        tags="#tag1 #tag2 #tag3"
        src={img}
        alt="my lost phone"
        body="I lost this cloud at this and this To highlight specific text in a text scene: Press down on the text you'd like to highlight and tap on “Highlight” Tap on the checkmark to save your changes. To change your highlighted text color, tap on “Color”. Tap on your desired color and tap on “Done”."
        time="10/11/2022-12:34"
        phone="0502964682"
      />
      {/* <SimpleSlider /> */}
    </div>
  );
}

export default App;
