import { initializeApp } from "firebase/app";
// what service you want to use for example: import {getFirestore} from 'firebase/firestore;
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZiHqFG1Jyi4CXrTjkKgnIA0SBr-AlXmo",
  authDomain: "lost-found-items.firebaseapp.com",
  projectId: "lost-found-items",
  storageBucket: "lost-found-items.appspot.com",
  messagingSenderId: "192667446541",
  appId: "1:192667446541:web:8821d6cdae4158fc10d444",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
