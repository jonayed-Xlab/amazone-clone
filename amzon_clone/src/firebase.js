import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3aX2_cv1bqVwO9X0YNXH6t7jrecj9bw4",
    authDomain: "challenge-15c45.firebaseapp.com",
    projectId: "challenge-15c45",
    storageBucket: "challenge-15c45.appspot.com",
    messagingSenderId: "728593278392",
    appId: "1:728593278392:web:a0df4e6a7bd0eb498b5b4d",
    measurementId: "G-8322PVJQKP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};