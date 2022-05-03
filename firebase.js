// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0amLt4dQXKEBNQqAXbaD41_YhuUdRvi4",

  authDomain: "twitter-v2-76df1.firebaseapp.com",

  projectId: "twitter-v2-76df1",

  storageBucket: "twitter-v2-76df1.appspot.com",

  messagingSenderId: "940354074388",

  appId: "1:940354074388:web:95b92f90247f2ff635f401",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
