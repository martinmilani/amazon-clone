import firebase from "firebase";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "challenge-98fe5.firebaseapp.com",
  databaseURL: "https://challenge-98fe5.firebaseio.com",
  projectId: "challenge-98fe5",
  storageBucket: "challenge-98fe5.appspot.com",
  messagingSenderId: "879601096713",
  appId: "1:879601096713:web:9d2975183796f0267240d8",
  measurementId: "G-9GT14M46VG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
