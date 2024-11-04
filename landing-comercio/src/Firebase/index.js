// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaa3K9-I_Z7UAhTwkSFKmA-yRrwm-rdHU",
  authDomain: "landing-page-66892.firebaseapp.com",
  projectId: "landing-page-66892",
  storageBucket: "landing-page-66892.firebasestorage.app",
  messagingSenderId: "734412049654",
  appId: "1:734412049654:web:bf8188fc096e685ff8b0d7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
