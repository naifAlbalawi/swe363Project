import React, { useEffect } from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
// import Intro from "../components/Intro"
// import CarIntro from "../components/CarouselIntro";
// import Forms from "../components/forms"
// import SimpleSlider from "../components/CarouserLostPosts";

function App() {
  // to return to previou page when the url is wrong
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <p>Page Not Found</p>
      <p>404</p>
    </div>
  );
}

export default App;
