// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-fbL1xsxlz_CN56JeTkDubR22YdU3ug0",
  authDomain: "coder-firebase-first.firebaseapp.com",
  projectId: "coder-firebase-first",
  storageBucket: "coder-firebase-first.appspot.com",
  messagingSenderId: "214590310530",
  appId: "1:214590310530:web:262bc3c78f86f370cbcc9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)