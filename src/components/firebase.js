// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTAzygdy4RSVIqhd4xc4JXzGioTPO_nAs",
  authDomain: "my-portfolio-5c58d.firebaseapp.com",
  projectId: "my-portfolio-5c58d",
  storageBucket: "my-portfolio-5c58d.appspot.com",
  messagingSenderId: "196663332480",
  appId: "1:196663332480:web:165b6c3b0b7ef6a3252065",
  measurementId: "G-H78S7J6DFN"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage().ref();

export { storage, firebase as default };