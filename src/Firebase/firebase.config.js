

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi7HtTq5PzZTu5QlMZVPe-c4ifelT2iKU",
  authDomain: "task-management-auth-f1149.firebaseapp.com",
  projectId: "task-management-auth-f1149",
  storageBucket: "task-management-auth-f1149.appspot.com",
  messagingSenderId: "330352603117",
  appId: "1:330352603117:web:8dc9b463594eb0c2e981e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;

