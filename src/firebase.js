// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//هشيل الكود اللي هنا و اكتب ده 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzScXrRm58pg6JOktAt7IJwke2Mb2czz4",
  authDomain: "react-commerce-cbbf5.firebaseapp.com",
  projectId: "react-commerce-cbbf5",
  storageBucket: "react-commerce-cbbf5.firebasestorage.app",
  messagingSenderId: "740361963389",
  appId: "1:740361963389:web:b838de2354eac463c3ae14",
  measurementId: "G-GGDQ25PBJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//شيلت الكود اللي كان هنا و هكتب الكود ده مكانه

// initialize firebase Authentication and get a reference to the service
export const auth = getAuth(app);