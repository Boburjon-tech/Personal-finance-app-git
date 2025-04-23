// src/firebase/config.js


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config – production uchun
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ5lb3CMEC1ts0APUk8bgTjYuEyQaU798",
  authDomain: "finance-5cfcd.firebaseapp.com",
  projectId: "finance-5cfcd",
  storageBucket: "finance-5cfcd.firebasestorage.app",
  messagingSenderId: "979165405164",
  appId: "1:979165405164:web:57f768dc8406e89f4a6ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();  
export const auth = getAuth();      
