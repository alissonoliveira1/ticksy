// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBePzqRe18MC7kyRgCK6UsHUj7nINwl7no",
  authDomain: "eventix-572bc.firebaseapp.com",
  projectId: "eventix-572bc",
  storageBucket: "eventix-572bc.firebasestorage.app",
  messagingSenderId: "34319807624",
  appId: "1:34319807624:web:e98010a39ab86998851b3d",
  measurementId: "G-7YT7L11WKM"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
