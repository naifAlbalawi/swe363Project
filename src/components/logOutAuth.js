import { auth } from "./fb";
import { signOut } from "firebase/auth";
function logout() {
  signOut(auth);
}

export default logout;
