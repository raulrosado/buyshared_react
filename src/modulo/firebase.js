// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhcwRJlwOO1fpPWcwVKJJq0-PkPxuzX4c",
  authDomain: "buyshare-8e95e.firebaseapp.com",
  projectId: "buyshare-8e95e",
  storageBucket: "buyshare-8e95e.appspot.com",
  messagingSenderId: "826575449344",
  appId: "1:826575449344:web:19961a32917ca7561dd7e5",
  measurementId: "G-5ELN7T350J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);