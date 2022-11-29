import React from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Signup from "../components/signUp"



function App() {
  const text = "Signup";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      <Signup />
    </div>
  );
}

export default App;
