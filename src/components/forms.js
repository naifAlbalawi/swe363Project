import React, { useState } from "react";
import '../styling/form.css'
import { addDoc, collection, Timestamp,  } from "firebase/firestore"; 
import { db, auth } from "../components/fb";






function Forms() {

  const [name, setName] = useState('');
  const [found, setFound] = useState(true);
  const [location, setLocation] = useState("");
  const [title, setTitile] = useState("");
  const [desc, setDesc] = useState("");
  const [contact, setContact] = useState("");



  var el = document.getElementById('found-btn');
  if(el){
    document.getElementById("found-btn").addEventListener("click", () => setFound(true));
  }

  var el2 = document.getElementById('lost-btn');
  if(el2){
    document.getElementById("lost-btn").addEventListener("click", () => setFound(false));
  }


 

  const  postItem = (event) =>  {

    
    console.log(auth.currentUser.uid);


    event.preventDefault();


   


  
    const postData = {
      name: name,
      found: found,
      location: location,
      postedAt: Timestamp.now(),
      title: title,
      desc: desc,
      contact: contact,
      user: auth.currentUser.uid,
  };

  console.log(postData);
  addDoc(collection(db, "posts"), postData);

  setName('');
  setLocation("");
  setTitile("");
  setDesc("");
  setContact("");
  
  }
  

  return (
    <div className="container-form">
    <h1>Lost or Found Something?No Worries!</h1>
    <div className="divider"></div>
    <form action="#" onSubmit={postItem} >
    <h2>Name</h2>
    <input className="input" id="input-name"  name="name" onChange={event => setName(event.target.value)} value={name}/>
    
    <h2>Contact you through?</h2>
    <input id="input-contact" className="input" name="contact" onChange={event => setContact(event.target.value)} value={contact}/>
    <h2>The location of the lost item</h2>
    <input id="input-location"  name="location" className="input" onChange={event => setLocation(event.target.value)} value={location}/>
    <h2>Item name</h2>
    <input id="input-item"className="input"  name="item"  onChange={event => setTitile(event.target.value)} value={title}/>
    <h2>Describe the item</h2>
    <input id="input-describtion" className="input" name="describtion"  onChange={event => setDesc(event.target.value)} value={desc}/>
    <br/>
    <div className="btn-container">
    <input  id="lost-btn" className="form-btn" type="submit" value="Post Lost Item" /> 
    <input id="found-btn" className="form-btn" type="submit" value="Post Found Item" />
    </div>
  </form>
  </div>
  );
}
export default Forms;
