// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW9ADvd9Ow2y7MdIv0bg3ckKCAywwjvmg",
  authDomain: "netflixgpt-ad789.firebaseapp.com",
  projectId: "netflixgpt-ad789",
  storageBucket: "netflixgpt-ad789.appspot.com",
  messagingSenderId: "953499583266",
  appId: "1:953499583266:web:695707beb3a70dfd01db7b",
  measurementId: "G-KTKSNFZBM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();