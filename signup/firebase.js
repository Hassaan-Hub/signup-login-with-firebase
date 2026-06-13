import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBB6sAFnDdjremOYbpB7pSi5RjlYpU9zAc",
  authDomain: "myfirstproject-70e95.firebaseapp.com",
  projectId: "myfirstproject-70e95",
  storageBucket: "myfirstproject-70e95.firebasestorage.app",
  messagingSenderId: "898929202144",
  appId: "1:898929202144:web:601e4b33ea936b4fb59185",
  measurementId: "G-6ZYEPG98DX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
