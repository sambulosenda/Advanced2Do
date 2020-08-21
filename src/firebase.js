import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyDyo3huG_c0Mzxb6Q0n17Sa0aJv7C60ydA",
    authDomain: "todo-2b7e9.firebaseapp.com",
    databaseURL: "https://todo-2b7e9.firebaseio.com",
    projectId: "todo-2b7e9",
    storageBucket: "todo-2b7e9.appspot.com",
    messagingSenderId: "1035145494625",
    appId: "1:1035145494625:web:bc86ce6ca35f6ba2f0ea20"
    
});

export { firebaseConfig as firebase }