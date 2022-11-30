import Navbar from "./Navbar";
const lo = document.querySelector(".nav-item")
const setupUI = (user)=>{
  if(user){
    
    
  }

  else{
    document.getElementById("Creat-post").style.display='none'
   document.getElementById("found").style.display='none'
   document.getElementById("lost").style.display='none'
   document.getElementById("about").style.display='none'
  }
}

export default setupUI;