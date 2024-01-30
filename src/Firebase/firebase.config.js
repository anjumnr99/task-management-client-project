// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkj0RWgzT2gENWUXT5wKf0xEJbCT_JJuU",
  authDomain: "task-mate-auth-4f4f7.firebaseapp.com",
  projectId: "task-mate-auth-4f4f7",
  storageBucket: "task-mate-auth-4f4f7.appspot.com",
  messagingSenderId: "360431704567",
  appId: "1:360431704567:web:b04420da74f181ccfdf6f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;