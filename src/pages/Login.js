import React, { useEffect, useState } from "react";
import "../styling/App.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Login from "../components/login";
import { Navigate } from "react-router-dom";
import { auth } from "../components/fb";

function App() {
  let [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [user]);
  if (!user) {
    const text = "Login";
    return (
      <div className="App">
        <Navbar />
        <Intro text={text} />
        <Login />
      </div>
    );
  }
  return <Navigate to="/"></Navigate>;
}

export default App;
