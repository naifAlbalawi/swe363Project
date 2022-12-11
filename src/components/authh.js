import { auth, db } from "./fb";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore";

function a() {
  const signupForm = document.querySelector("#Signup-form");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm["User-Email"].value;
    const password = signupForm["User-password"].value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return setDoc(doc(collection(db, "Users")), {
          FName: signupForm["User-FName"].value,
          LName: signupForm["User-LName"].value,
          email: email,
        });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          document.querySelector("#error").innerHTML = "Email already exists";
        } else if (e.code === "auth/weak-password") {
          document.querySelector("#error").innerHTML =
            "password must be more than 6 digits";
        } else if (e.code === "auth/invalid-email") {
          document.querySelector("#error").innerHTML = "Invalid email";
        }
      });
  });
}

export default a;
