// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWBv3ESSZg7CHOZL-ZksyrrKHYW4ECcE",
  authDomain: "app-alabanza-932ac.firebaseapp.com",
  projectId: "app-alabanza-932ac",
  storageBucket: "app-alabanza-932ac.firebasestorage.app",
  messagingSenderId: "183437085931",
  appId: "1:183437085931:web:2521938307d508be3b42ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);