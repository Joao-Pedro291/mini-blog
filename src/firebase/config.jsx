// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4yVzZaOXbgvidYwZapzRNi87U36JsTLs",
  authDomain: "miniblog-ca588.firebaseapp.com",
  projectId: "miniblog-ca588",
  storageBucket: "miniblog-ca588.firebasestorage.app",
  messagingSenderId: "159770601037",
  appId: "1:159770601037:web:beafccdb3b7c794e6ede04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db, app };
