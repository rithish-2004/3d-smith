import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; // Firestore import
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfSniSWXax1TzYc22r3neosgi4O0yC5HU",
  authDomain: "dsmith-7e7f9.firebaseapp.com",
  projectId: "dsmith-7e7f9",
  storageBucket: "dsmith-7e7f9.appspot.com",
  messagingSenderId: "686509335412",
  appId: "1:686509335412:web:20d35a8f720058165ec221",
  measurementId: "G-Q7ZYWDC0QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore export