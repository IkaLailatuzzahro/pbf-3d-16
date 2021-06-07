import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcpXY7Xy2BWPI_670CyEuoHqSimmplJEI",
  authDomain: "belajar-react-27452.firebaseapp.com",
  databaseURL: "https://belajar-react-27452-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-react-27452",
  storageBucket: "belajar-react-27452.appspot.com",
  messagingSenderId: "857691583081",
  appId: "1:857691583081:web:780d4e37f277c4fc5d68f8",
  measurementId: "G-4J3RBGV1K5"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();
