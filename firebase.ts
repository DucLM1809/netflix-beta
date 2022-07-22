// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZdahYS_ZIYHZvWEApG4yDR3OvgEMAHxk",
    authDomain: "netflix-beta-45c9a.firebaseapp.com",
    projectId: "netflix-beta-45c9a",
    storageBucket: "netflix-beta-45c9a.appspot.com",
    messagingSenderId: "397898914638",
    appId: "1:397898914638:web:c91c2eb8f7ee9a25509c1f",
    measurementId: "G-DLBSN50CP8"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }