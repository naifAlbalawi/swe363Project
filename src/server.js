// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// what service you want to use for example: import {getFirestore} from 'firebase/firestore;
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZiHqFG1Jyi4CXrTjkKgnIA0SBr-AlXmo",
  authDomain: "lost-found-items.firebaseapp.com",
  projectId: "lost-found-items",
  storageBucket: "lost-found-items.appspot.com",
  messagingSenderId: "192667446541",
  appId: "1:192667446541:web:8821d6cdae4158fc10d444"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// assign the database 
const db = getFirestore(firebaseApp);
