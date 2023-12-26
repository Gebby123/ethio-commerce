// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABRHIWLjzyqk7veIULfpRIJZ1PGqM2SdM",
  authDomain: "gebby-ec924.firebaseapp.com",
  projectId: "gebby-ec924",
  storageBucket: "gebby-ec924.appspot.com",
  messagingSenderId: "146679490898",
  appId: "1:146679490898:web:1df65d1759bc0d6d57f28b",
  measurementId: "G-11X956H72M",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
