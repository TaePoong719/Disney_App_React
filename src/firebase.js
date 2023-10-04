// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVTtwn02yYw7qblrZeLpgOe4xNimQo88g",
  authDomain: "react-disney-plus-app-23be6.firebaseapp.com",
  projectId: "react-disney-plus-app-23be6",
  storageBucket: "react-disney-plus-app-23be6.appspot.com",
  messagingSenderId: "133464190351",
  appId: "1:133464190351:web:d53394a239a114d94faffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;