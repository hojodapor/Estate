// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authy-6556a.firebaseapp.com",
  projectId: "authy-6556a",
  storageBucket: "authy-6556a.appspot.com",
  messagingSenderId: "560082111969",
  appId: "1:560082111969:web:fb2be3357697b6862cd6a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
