import React, { useState, useEffect } from "react";
import "../styling/App.css";
import "C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/styling/cards.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/fb";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function Found() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  });
  const [update, setUpdate] = useState(true);

  const [postCollection, setPostCollection] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const posts = collection(db, "posts");
    const q = query(posts, where("found", "==", true));
    getDocs(q).then((data) => {
      console.log(data);
      const posts = [];
      data.forEach((post) => {
        console.log(post.data());
        let timestamp = new Date(post.data().postedAt.seconds * 1000);
        let datetime = timestamp.toDateString();
        posts.push({
          id: post.id,
          user: post.data().name,
          title: post.data().title,
          body: post.data().desc,
          contact: post.data().contact,
          location: post.data().location,
          time: datetime,
        });
      });
      setPostCollection(posts);
      const arr = [];
      postCollection.forEach((elem, index) => {
        arr.push(
          <Card
            key={index}
            id={elem.id}
            user={elem.user}
            email={elem.email}
            title={elem.title}
            location={elem.location}
            src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
            alt={elem.title}
            body={elem.body}
            contact={elem.contact}
            time={elem.time}
          />
        );
      });
      console.log(arr);
      setCards(arr);
      setUpdate(false);
    });
  }, [update]);

  const text = "Found Item Posts";
  if (cards.length === 0) {
    return (
      <div className="App">
        <Navbar />
        <Intro text={text} />
        <h3 className="sorry">
          {update
            ? "Loading..."
            : "Sorry, there are no posts at the moment, please try again later"}
        </h3>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Intro text={text} />
        {cards}
      </div>
    );
  }
}

export default Found;
