import React from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Login from "../components/login"


function App() {
  const text = "Login";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      <Login />
    </div>
  );
}

export default App;
