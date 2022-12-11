import React from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

function App() {
  const text = "404: Page not found";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
    </div>
  );
}

export default App;
