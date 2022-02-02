import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-gJf-qVzl4HCipfhb3qS-y0TiyrDJed4",
  authDomain: "fastcar-a9146.firebaseapp.com",
  projectId: "fastcar-a9146",
  storageBucket: "fastcar-a9146.appspot.com",
  messagingSenderId: "62665546699",
  appId: "1:62665546699:web:3aad8549bb9e7cc6ba744e",
};
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
export { projectFirestore };
