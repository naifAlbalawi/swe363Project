import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { db } from "../components/fb";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../images/kfupm.png";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const [update, setUpdate] = useState(true);
  const [postCollection, setPostCollection] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getDocs(collection(db, "posts")).then((data) => {
      const posts = [];
      data.forEach((post) => {
        let docRef = doc(db, "Users", post.data().user);
        getDoc(docRef).then((user) => {
          console.log(user);
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
          <LostCard
            key={index}
            id={elem.id}
            user={elem.user}
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
      setCards(arr);
      setUpdate(false);
    });
  }, [update]);
  var settings = {
    className: "LostPosts",
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  console.log(cards);
  return <Slider {...settings}>{cards}</Slider>;
}

function LostCard(post) {
  return (
    <div>
      <Card className="Card">
        <Card.Img variant="top" src={post.src} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item> {post.contact}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/posts?id=${post.id}`}>Visit</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
