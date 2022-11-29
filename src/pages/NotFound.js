import React, { useEffect } from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Intro from "../components/Intro"

function App() {
  // to return to previou page when the url is wrong
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(-1);
  //   }, 5000);
  // }, []);

  const text = "404: Page not found";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
    </div>
  );
}

export default App;
