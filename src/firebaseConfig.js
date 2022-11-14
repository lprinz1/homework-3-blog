import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQPM6maslXzGJbsXWayBxm_3Yev_-l0A4",
  authDomain: "react-blog-e7761.firebaseapp.com",
  projectId: "react-blog-e7761",
  storageBucket: "react-blog-e7761.appspot.com",
  messagingSenderId: "31478248593",
  appId: "1:31478248593:web:29422e7052542bb608bb30"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)