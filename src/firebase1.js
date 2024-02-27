// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4lLUkpYtPh1nneP580aXX2Ufyom2Y1LQ",
  authDomain: "social-media-9ec65.firebaseapp.com",
  projectId: "social-media-9ec65",
  storageBucket: "social-media-9ec65.appspot.com",
  messagingSenderId: "302790139195",
  appId: "1:302790139195:web:5697f3c2cf66351f862b1e",
  measurementId: "G-N0D8F7B00G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);