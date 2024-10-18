// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3O1kSZnla0DBu_z7WEFMCBAYoIqlcauM",
  authDomain: "rapidaid-89e5f.firebaseapp.com",
  projectId: "rapidaid-89e5f",
  storageBucket: "rapidaid-89e5f.appspot.com",
  messagingSenderId: "151990165555",
  appId: "1:151990165555:web:f794a7fa27731717db4346",
  measurementId: "G-0FT9EV4LP8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
