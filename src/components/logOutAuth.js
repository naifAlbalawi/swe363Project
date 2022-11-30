import {auth} from "./fb"
import { signOut } from "firebase/auth";
function logout(){
    const logOut = document.getElementById("LogOut");
    
    if(logOut!=null){
        logOut.addEventListener('click',(e)=>{
            e.preventDefault();
            auth.signOut()
        
        }) 
        
    }

}

export default logout;
