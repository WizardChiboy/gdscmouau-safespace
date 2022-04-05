// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2mz6Vnr3MqoGtAA_hWqcOLCgQFxYMTk8",
  authDomain: "safespace-445c5.firebaseapp.com",
  projectId: "safespace-445c5",
  storageBucket: "safespace-445c5.appspot.com",
  messagingSenderId: "1070189205213",
  appId: "1:1070189205213:web:071db4bbd631aef767ad34",
  measurementId: "G-DG4LP79973",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
