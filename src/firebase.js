// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLyDjFhfW1jl7gE4UqbAzQXBFi_xSMdkQ",
  authDomain: "decor-7fc9c.firebaseapp.com",
  projectId: "decor-7fc9c",
  storageBucket: "decor-7fc9c.appspot.com", // ✅ corrected
  messagingSenderId: "630734798298",
  appId: "1:630734798298:web:21a4a1830f3ad8565e14e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
