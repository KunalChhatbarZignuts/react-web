// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Spe3bfCTMeOjOOpse2RDcEYamZeT3w8",
  authDomain: "fir-e226f.firebaseapp.com",
  projectId: "fir-e226f",
  storageBucket: "fir-e226f.firebasestorage.app",
  messagingSenderId: "714686118788",
  appId: "1:714686118788:web:d337f942c4bafb976e3bd1",
  measurementId: "G-RWWYVZJ1NK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Add this default export
export default app;
