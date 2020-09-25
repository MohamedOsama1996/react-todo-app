import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAC0vBPtVqyCxNFfKdsZCv5KA8Mex1lESY",
    authDomain: "todo-app-cp-5173d.firebaseapp.com",
    databaseURL: "https://todo-app-cp-5173d.firebaseio.com",
    projectId: "todo-app-cp-5173d",
    storageBucket: "todo-app-cp-5173d.appspot.com",
    messagingSenderId: "360902815824",
    appId: "1:360902815824:web:209d9c4c3c09ec8f39e155",
    measurementId: "G-RYL51YJ7DD"
})

const db = firebaseApp.firestore();

export default db ;