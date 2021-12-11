import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBoUyKr7GEPfNLhDVdT0gejM8o5vlD5liY",
    authDomain: "ecom-ef36a.firebaseapp.com",
    projectId: "ecom-ef36a",
    storageBucket: "ecom-ef36a.appspot.com",
    messagingSenderId: "294964433993",
    appId: "1:294964433993:web:0579cd17f74777d6dd1b98",
    measurementId: "${config.measurementId}"
  };
  

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}