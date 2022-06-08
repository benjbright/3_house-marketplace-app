// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO6RIjKNS6mdXb96oJOslHLfjKotFSkZ4",
  authDomain: "house-marketplace-app-e2548.firebaseapp.com",
  projectId: "house-marketplace-app-e2548",
  storageBucket: "house-marketplace-app-e2548.appspot.com",
  messagingSenderId: "820323728157",
  appId: "1:820323728157:web:9fc7e552a795c85cf0fff4",
}

// Initialize Firebase
// const app =
initializeApp(firebaseConfig)
export const db = getFirestore()
