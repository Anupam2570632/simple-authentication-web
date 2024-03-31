// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDlg2wH4MFxF93SviwTzyNGt6Q81gxHwo",
    authDomain: "simple-authentication-we-ab3dc.firebaseapp.com",
    projectId: "simple-authentication-we-ab3dc",
    storageBucket: "simple-authentication-we-ab3dc.appspot.com",
    messagingSenderId: "463611908633",
    appId: "1:463611908633:web:72491a293dc5fc129a5088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;