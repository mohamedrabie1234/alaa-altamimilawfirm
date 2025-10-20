import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcHJP64mW6Nl9JnvXppwDufYJVz-_8-0s",
  authDomain: "alaa-law.firebaseapp.com",
  projectId: "alaa-law",
  storageBucket: "alaa-law.appspot.com", // Ensure the correct bucket name
  messagingSenderId: "939538560272",
  appId: "1:939538560272:web:9c11a5d280acea5c47e195",
};

// Initialize Firebase App (Singleton Pattern)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { db, auth };
