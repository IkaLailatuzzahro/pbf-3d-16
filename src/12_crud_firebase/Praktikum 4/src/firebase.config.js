import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyAcLtnu3OLJqvrahOlPkK0jC74XroIu3J0",
    authDomain: "belajar-react-d0113.firebaseapp.com",
    databaseURL: "https://belajar-react-d0113-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajar-react-d0113",
    storageBucket: "belajar-react-d0113.appspot.com",
    messagingSenderId: "552235332813",
    appId: "1:552235332813:web:df8c6cebab54021d5b6584",
    measurementId: "G-PLE1GX0BD0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();