// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYgx-9N-N3gljcgT5voeXY3EY1T3CVMC0",
  authDomain: "emailpassauth-4ed7c.firebaseapp.com",
  projectId: "emailpassauth-4ed7c",
  storageBucket: "emailpassauth-4ed7c.appspot.com",
  messagingSenderId: "221805266657",
  appId: "1:221805266657:web:71fe1cb33cacd06a9619a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
