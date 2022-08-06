// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShpRWaTGcSoYhlBRobd8QzpDnlOwX3M8",
  authDomain: "videodiary-2240d.firebaseapp.com",
  projectId: "videodiary-2240d",
  storageBucket: "videodiary-2240d.appspot.com",
  messagingSenderId: "519781198132",
  appId: "1:519781198132:web:820d5ac17d15dcb1cb1d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);