import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOqvG9fcYWnXUxhR0-eM4_mOqBrrYwco4",
  authDomain: "atlas-app-b2199.firebaseapp.com",
  databaseURL: "https://atlas-app-b2199.firebaseio.com",
  projectId: "atlas-app-b2199",
  storageBucket: "atlas-app-b2199.appspot.com",
  messagingSenderId: "663755051072",
  appId: "1:663755051072:web:c8333868471b18575b8fa5",
  measurementId: "G-K3CZZGBSW0",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
