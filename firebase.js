import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfALP__feM8PZjaoZNkFWx6Ks13xwwazo",
  authDomain: "anish-portfolio-26737.firebaseapp.com",
  projectId: "anish-portfolio-26737",
  storageBucket: "anish-portfolio-26737.appspot.com",
  messagingSenderId: "336215747889",
  appId: "1:336215747889:web:a78f9cc390b9d491461410",
  measurementId: "G-2LVW7DC1SY"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();