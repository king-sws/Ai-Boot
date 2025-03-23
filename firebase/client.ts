// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD7ecrACNzoF4_vFSgs3Sivqjc51dMTcs",
    authDomain: "aimodel-6fbd8.firebaseapp.com",
    projectId: "aimodel-6fbd8",
    storageBucket: "aimodel-6fbd8.firebasestorage.app",
    messagingSenderId: "259564598392",
    appId: "1:259564598392:web:54a84bb8b4d64694a4e98d",
    measurementId: "G-XBRKNMVSNK"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
