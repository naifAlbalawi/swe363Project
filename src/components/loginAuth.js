import {auth} from "./fb"
import { signInWithEmailAndPassword } from "firebase/auth";
import setupUI from "./Shownav"
auth.onAuthStateChanged(user=>{
    if(user){

        console.log("user logged in ")
        setupUI(user)
    }
    else{
        console.log("user logged out")
        setupUI(user)
    }
})

function LoginAuth(){

    const loginForm = document.querySelector("#Login-form");
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = loginForm['User-Email'].value;
    const password = loginForm['User-password'].value;
    signInWithEmailAndPassword(auth,email,password).then(cred=>{
        console.log(cred.user);
        loginForm.reset();
       

    })
})

}

export default LoginAuth
