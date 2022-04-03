// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    signInWithPopup,
    getAuth,
    GoogleAuthProvider
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf3ExOlDFG9xVU2Y7fSnCrFDaXfpik8zg",
  authDomain: "crwn-db-6d424.firebaseapp.com",
  projectId: "crwn-db-6d424",
  storageBucket: "crwn-db-6d424.appspot.com",
  messagingSenderId: "859366006718",
  appId: "1:859366006718:web:06e90df4c5d70a14ad23ef"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 
