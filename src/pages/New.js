import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Forms from "../components/forms";
import { auth } from "../components/fb";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  });
  const text = "Create New Post";
  return (
    <div className="App">
      <Navbar />
      <Intro text={text} />
      <Forms />
    </div>
  );
}

export default App;
