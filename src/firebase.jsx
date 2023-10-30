import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzqpKAJcObKPw_SvPwh7VjtGNyvFmxKdk",
  authDomain: "instantchat-44e66.firebaseapp.com",
  projectId: "instantchat-44e66",
  storageBucket: "instantchat-44e66.appspot.com",
  messagingSenderId: "936771482901",
  appId: "1:936771482901:web:05bc1a10dddb9c5136651c",
  measurementId: "G-RWH5BN3WBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);