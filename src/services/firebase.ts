// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTerhdcciaZlheEeWa86PAed7eLrUjotk",
  authDomain: "auth-22f48.firebaseapp.com",
  projectId: "auth-22f48",
  storageBucket: "auth-22f48.appspot.com",
  messagingSenderId: "313383477205",
  appId: "1:313383477205:web:686de4aa92468307b1675c",
  measurementId: "G-TZML1MD485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);