import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAQ_Lx3EXMJ9MXqZUXVA3arM532J-XRDZU",
    authDomain: "fir-b62d7.firebaseapp.com",
    databaseURL: "https://fir-b62d7-default-rtdb.firebaseio.com",
    projectId: "fir-b62d7",
    storageBucket: "fir-b62d7.appspot.com",
    messagingSenderId: "56721659985",
    appId: "1:56721659985:web:5156351a5ce28688f80070",
    measurementId: "G-L3YKSXMS3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = !getApp().length ? initializeApp(firebaseConfig) : getApp()[0];

// Initialize Cloud Firestore and get a reference to the service
const dbFire = getFirestore(app);

export default dbFire;
