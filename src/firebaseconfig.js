// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBC8TlgXahU4UbQCNepDOyjDnOvJFeazQ",
  authDomain: "fir-storage-c1b3c.firebaseapp.com",
  projectId: "fir-storage-c1b3c",
  storageBucket: "fir-storage-c1b3c.firebasestorage.app",
  messagingSenderId: "580767805393",
  appId: "1:580767805393:web:14fe8d12e9adc296137af0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);