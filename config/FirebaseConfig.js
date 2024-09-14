// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "capstone-e63fc.firebaseapp.com",
  projectId: "capstone-e63fc",
  storageBucket: "capstone-e63fc.appspot.com",
  messagingSenderId: "831503310999",
  appId: "1:831503310999:web:211b28ab9ac23c4211c9d2",
  measurementId: "G-9ZYLXX7DMD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
