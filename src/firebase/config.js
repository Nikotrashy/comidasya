// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTVlw0tM65kXG5YUzoabjJ2LzERZU3oLs",
  authDomain: "comidasya-8e71c.firebaseapp.com",
  projectId: "comidasya-8e71c",
  storageBucket: "comidasya-8e71c.appspot.com",
  messagingSenderId: "499687995102",
  appId: "1:499687995102:web:8e402c1ca084642ccc744f",
  measurementId: "G-YFYP84YDD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;