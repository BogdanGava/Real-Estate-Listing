import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpvZzn98LJiNnHxxqc7iJJDjqbZ3vQaM",
  authDomain: "real-estate-listing-plat-dbc05.firebaseapp.com",
  projectId: "real-estate-listing-plat-dbc05",
  storageBucket: "real-estate-listing-plat-dbc05.appspot.com",
  messagingSenderId: "345765936113",
  appId: "1:345765936113:web:32915148ddd726bd01a250"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
