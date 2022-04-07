// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0CGzd4eDr_HOMgWwKxouZ6i9HkVPK_lE",
  authDomain: "firefron7.firebaseapp.com",
  projectId: "firefron7",
  storageBucket: "firefron7.appspot.com",
  messagingSenderId: "94818241766",
  appId: "1:94818241766:web:ec643c3e3eb1cb021d3f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const db = getFirestore();

export{
    app,
    google,
    db
}