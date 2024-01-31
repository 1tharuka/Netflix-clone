import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCWjb1R1U2sL216nZPtVJLFseVgEZ5A4PM",
    authDomain: "netflix-cone-6b4f9.firebaseapp.com",
    projectId: "netflix-cone-6b4f9",
    storageBucket: "netflix-cone-6b4f9.appspot.com",
    messagingSenderId: "376549804426",
    appId: "1:376549804426:web:ee5598b1f7942bef9f6073"
  };
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };