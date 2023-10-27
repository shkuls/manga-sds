// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'//


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtxoCBQWv2buo1cL10YmO2khfj6qkUTp8",
    authDomain: "manga-8c6ab.firebaseapp.com",
    projectId: "manga-8c6ab",
    storageBucket: "manga-8c6ab.appspot.com",
    messagingSenderId: "877616270304",
    appId: "1:877616270304:web:665b382f83ecc05e8c3985"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) //
export const provider = new GoogleAuthProvider() //

//firebase login
//firebase init
//firebase deploy