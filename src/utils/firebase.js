// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt-NTquQkNsDSXjRitqrEqODPZj9Qjjgs",
  authDomain: "todo-list-1821b.firebaseapp.com",
  projectId: "todo-list-1821b",
  storageBucket: "todo-list-1821b.appspot.com",
  messagingSenderId: "887430798046",
  appId: "1:887430798046:web:71f5696cb95d0b7220c04f"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()

export { db };