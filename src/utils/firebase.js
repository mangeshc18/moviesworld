// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcrBrN3rcilifR72j3H54qbCppB4W3Lzc",
  authDomain: "netflixgpt-6df99.firebaseapp.com",
  projectId: "netflixgpt-6df99",
  storageBucket: "netflixgpt-6df99.appspot.com",
  messagingSenderId: "1084695280832",
  appId: "1:1084695280832:web:39aae6dd1230be3231c125",
  measurementId: "G-8FKRD5RZYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();