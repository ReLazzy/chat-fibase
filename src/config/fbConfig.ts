import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB61hoJ90B85nWPyqNEw3_8urGI64iNMts",
  authDomain: "chat2-d7354.firebaseapp.com",
  projectId: "chat2-d7354",
  storageBucket: "chat2-d7354.appspot.com",
  messagingSenderId: "12562085526",
  appId: "1:12562085526:web:b40c6ab2f959690322f4b7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
