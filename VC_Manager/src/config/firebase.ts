// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs3WESdUclb-NJQiaJ8dD445YTw26AYls",
  authDomain: "vc-manager-ada83.firebaseapp.com",
  projectId: "vc-manager-ada83",
  storageBucket: "vc-manager-ada83.appspot.com",
  messagingSenderId: "971637236172",
  appId: "1:971637236172:web:8eba2c57d093d262fd7d69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
