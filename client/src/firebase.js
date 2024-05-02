// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-63264.firebaseapp.com",
  projectId: "blog-63264",
  storageBucket: "blog-63264.appspot.com",
  messagingSenderId: "779023383346",
  appId: "1:779023383346:web:860fac9f1b44cf3c18f52b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);