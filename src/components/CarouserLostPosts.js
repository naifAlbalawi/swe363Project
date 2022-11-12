import React from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';
import logo from "../images/kfupm.png"


export default function SimpleSlider(listOfposts) {
    const list1= {imageName:logo,itemName:"iphone",itemDescreption:"green iphone with 64 gb and a broken screen",phone:"0590594040",email:"naif@gmail.com"}
      listOfposts=new Array(5);
      for(var i=0;i<20;i++){
        listOfposts.push(list1)
      }
      
  var settings = {
    className:"LostPosts",
    dots: true,
    infinite: true,
    slidesToShow:5,
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
              initialSlide: 2
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
        ]

  };
  return (
    
    <Slider {...settings} >
          {listOfposts.map(LostCard)}
    </Slider>
  );
}


function LostCard(post){
 return( 
    <div className="Card">
 <Card  >
      <Card.Img variant="top" src={post.imageName} style={{width:"100%"}} />
      <Card.Body>
        <Card.Title>{post.itemName}</Card.Title>
        <Card.Text>
          {post.itemDescreption}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {post.phone}</ListGroup.Item>
        <ListGroup.Item>{post.email}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">contact</Card.Link>
        <Card.Link href="#">share</Card.Link>
      </Card.Body>
    </Card>
    </div>);
}

