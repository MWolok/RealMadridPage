// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBcnMh8ITQV6lmzvrFxSuPqnvVuMi96eVI",
	authDomain: "rmapage-9243d.firebaseapp.com",
	projectId: "rmapage-9243d",
	storageBucket: "rmapage-9243d.appspot.com",
	messagingSenderId: "20623761561",
	appId: "1:20623761561:web:f4e114855d0863a5bb1808",
	measurementId: "G-TPSY83G0WD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, signInWithEmailAndPassword,onAuthStateChanged,signOut };
