import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styling/App.css";
import "../styling/Card.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/fb";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";

function Posts({ params }) {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  });
  const paramsVal = {
    id: params.get("id"),
    found: params.get("found"),
    lost: params.get("lost"),
  };
  const [update, setUpdate] = useState(true);

  const [postCollection, setPostCollection] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (paramsVal.id) {
      let docRef1 = doc(db, "posts", paramsVal.id);
      getDoc(docRef1).then((post) => {
        const posts = [];
        let docRef = doc(db, "Users", post.data().user);
        getDoc(docRef).then((user) => {
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
              title={elem.title}
<<<<<<< HEAD
              tags={elem.location}
              // src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
=======
              location={elem.location}
              src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
>>>>>>> de63cf508e9d9c839f02d13f4d3ce09c1da88349
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
    } else if (paramsVal.found === "true") {
      const posts = collection(db, "posts");
      const q = query(posts, where("found", "==", true));
      getDocs(q).then((data) => {
        const posts = [];
        data.forEach((post) => {
          let docRef = doc(db, "Users", post.data().user);
          getDoc(docRef).then((user) => {
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
        });
        setPostCollection(posts);
        const arr = [];
        postCollection.forEach((elem, index) => {
          arr.push(
            <Card
              key={index}
              id={elem.id}
              user={elem.user}
              title={elem.title}
<<<<<<< HEAD
              tags={elem.location}
              // src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
=======
              location={elem.location}
              src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
>>>>>>> de63cf508e9d9c839f02d13f4d3ce09c1da88349
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
    } else if (paramsVal.lost === "true") {
      const posts = collection(db, "posts");
      const q = query(posts, where("found", "==", false));
      getDocs(q).then((data) => {
        const posts = [];
        data.forEach((post) => {
          let docRef = doc(db, "Users", post.data().user);
          getDoc(docRef).then((user) => {
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
        });
        setPostCollection(posts);
        const arr = [];
        postCollection.forEach((elem, index) => {
          arr.push(
            <Card
              key={index}
              id={elem.id}
              user={elem.user}
              title={elem.title}
<<<<<<< HEAD
              tags={elem.location}
              // src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
=======
              location={elem.location}
              src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
>>>>>>> de63cf508e9d9c839f02d13f4d3ce09c1da88349
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
    } else {
      getDocs(collection(db, "posts")).then((data) => {
        const posts = [];
        data.forEach((post) => {
          let docRef = doc(db, "Users", post.data().user);
          getDoc(docRef).then((user) => {
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
        });
        setPostCollection(posts);
        const arr = [];
        postCollection.forEach((elem, index) => {
          arr.push(
            <Card
              key={index}
              id={elem.id}
              user={elem.user}
              title={elem.title}
<<<<<<< HEAD
              tags={elem.location}
              // src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
=======
              location={elem.location}
              src={require(`C:/Users/xmxm7/Desktop/GitHub/swe363Project/src/images/post1.png`)}
>>>>>>> de63cf508e9d9c839f02d13f4d3ce09c1da88349
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
    }
  }, [update, paramsVal.id, paramsVal.found, paramsVal.lost]);

  const text = `${
    paramsVal.found === "true"
      ? "Found "
      : paramsVal.lost === "true"
      ? "Lost "
      : ""
  }Item Posts`;
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

Posts.propTypes = {
  params: PropTypes.object,
};

export default Posts;
