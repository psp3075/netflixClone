//import { initializeApp } from "firebase/app";
import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_KEY,
  authDomain: "netflixc-f2f9c.firebaseapp.com",
  projectId: "netflixc-f2f9c",
  storageBucket: "netflixc-f2f9c.appspot.com",
  messagingSenderId: "961542970841",
  appId: "1:961542970841:web:3666cb44acf1a19260cdc8",
  measurementId: "G-2KPKCQ80L7",
};

const firebase = Firebase.initializeApp(firebaseConfig);
// seedDatabase(firebase);

export { firebase };
