import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyBDOR3dHFW71zup_CQYrwihyxynUQBnAMk",
    authDomain: "code-challenge-4d2b6.firebaseapp.com",
    projectId: "code-challenge-4d2b6",
    storageBucket: "code-challenge-4d2b6.firebasestorage.app",
    messagingSenderId: "856763678773",
    appId: "1:856763678773:web:d0b659be966b897920b17c",
    measurementId: "G-PE5PBPVZ10"
  };



const app = initializeApp(firebaseConfig)


export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const functions = getFunctions(app)