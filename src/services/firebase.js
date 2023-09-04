// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdSI9w4qtiv2DWNDk8BuEEKdheD-EZkjs",
    authDomain: "stmichael-academy.firebaseapp.com",
    projectId: "stmichael-academy",
    storageBucket: "stmichael-academy.appspot.com",
    messagingSenderId: "1068632662452",
    appId: "1:1068632662452:web:25e98a385e7a0173c212e1",
    measurementId: "G-ZMX3LPK628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);