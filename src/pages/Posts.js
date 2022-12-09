import React, { useState } from "react";
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
import { useEffect } from "react";

function Posts({ params }) {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  });
  window.history.pushState("user", "posts");
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
      getDoc(docRef1).then((data) => {
        const posts = [];
        let docRef = doc(db, "Users", data.data().user);
        getDoc(docRef).then((user) => {
          let timestamp = data.data().time;
          let datetime = timestamp.toDate().toDateString();
          posts.push({
            id: data.id,
            user: user.data().Username,
            email: user.data().Useremail,
            title: data.data().title,
            body: data.data().desc,
            phone: data.data().phone,
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
              tags=""
              src=""
              alt=""
              body={elem.body}
              phone={elem.phone}
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
            let timestamp = post.data().time;
            let datetime = timestamp.toDate().toDateString();
            posts.push({
              id: post.id,
              user: user.data().Username,
              email: user.data().Useremail,
              title: post.data().title,
              body: post.data().desc,
              phone: post.data().phone,
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
              email={elem.email}
              title={elem.title}
              tags=""
              src=""
              alt=""
              body={elem.body}
              phone={elem.phone}
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
            let timestamp = post.data().time;
            let datetime = timestamp.toDate().toDateString();
            posts.push({
              id: post.id,
              user: user.data().Username,
              email: user.data().Useremail,
              title: post.data().title,
              body: post.data().desc,
              phone: post.data().phone,
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
              email={elem.email}
              title={elem.title}
              tags=""
              src=""
              alt=""
              body={elem.body}
              phone={elem.phone}
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
            let timestamp = post.data().time;
            let datetime = timestamp.toDate().toDateString();
            posts.push({
              id: post.id,
              user: user.data().Username,
              email: user.data().Useremail,
              title: post.data().title,
              body: post.data().desc,
              phone: post.data().phone,
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
              email={elem.email}
              title={elem.title}
              tags=""
              src=""
              alt=""
              body={elem.body}
              phone={elem.phone}
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
        <h3 className="sorry">Sorry, there are no posts at the moment, please try again later</h3>
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
