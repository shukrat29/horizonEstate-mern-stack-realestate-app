// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-405e7.firebaseapp.com",
  projectId: "mern-estate-405e7",
  storageBucket: "mern-estate-405e7.firebasestorage.app",
  messagingSenderId: "268999824517",
  appId: "1:268999824517:web:02c2be9c50f2dbcb12c5ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
