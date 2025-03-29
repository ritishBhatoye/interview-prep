import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ_S9U5Kp8odSg2mnc9U5eIZID2sFN1U8",
  authDomain: "prepwise-76254.firebaseapp.com",
  projectId: "prepwise-76254",
  storageBucket: "prepwise-76254.firebasestorage.app",
  messagingSenderId: "417643173076",
  appId: "1:417643173076:web:8c46208941b596032ed741",
  measurementId: "G-2K4Z0RFQ6P",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
