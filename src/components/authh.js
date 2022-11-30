
import {auth,db} from "./fb"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, collection,doc } from "firebase/firestore";

function a (){
    const signupForm = document.querySelector("#Signup-form");
     
    signupForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        
        const email = signupForm["User-Email"].value;
        const password = signupForm["User-password"].value;
    
       createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
      
        return setDoc(doc(collection(db,"Users")),{
            Username:  signupForm["User-Name"].value,
            Useremail: email
        });

        
        
       }).then(()=>{
        signupForm.reset();
       })

      
      
    })
} 

export default a;


