
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "englishteachthink.firebaseapp.com",
  projectId: "englishteachthink",
  storageBucket: "englishteachthink.appspot.com",
  messagingSenderId: "1062627111869",
  appId: "1:1062627111869:web:4665d743ab726616df58d4",
  measurementId: "G-MR5FVGGSSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);