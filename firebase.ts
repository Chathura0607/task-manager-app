import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzAJBNQEIBzRuCAsJEaxDIBLkz7OALHSU",
  authDomain: "task-manager-369ff.firebaseapp.com",
  projectId: "task-manager-369ff",
  storageBucket: "task-manager-369ff.firebasestorage.app",
  messagingSenderId: "328118847557",
  appId: "1:328118847557:web:ccec222398e3660893fb2c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);