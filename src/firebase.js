// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsMB8ciFcY9cRhVSS8kBmJ20qbl6_z_w0",
  authDomain: "reacttodoapplist.firebaseapp.com",
  projectId: "reacttodoapplist",
  storageBucket: "reacttodoapplist.appspot.com",
  messagingSenderId: "210338890967",
  appId: "1:210338890967:web:cafe604617b78b9f085c92",
  measurementId: "G-HKXLGQWVM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app)

export {db ,auth};