import { initializeApp } from "firebase/app";
import { getAuth } from "/firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkTAzSwB4IyWP5d9KVZ8pCEzSu8l42D3M",
  authDomain: "auth-8687e.firebaseapp.com",
  projectId: "auth-8687e",
  storageBucket: "auth-8687e.appspot.com",
  messagingSenderId: "71407890107",
  appId: "1:71407890107:web:3b7aaf3c37bc23f21b839e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
