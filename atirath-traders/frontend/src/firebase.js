// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDswMQdo8MfWgst1DCKFTN26nn6JSexBUA",
  authDomain: "atirath-fa6f8.firebaseapp.com",
  databaseURL: "https://atirath-fa6f8-default-rtdb.firebaseio.com",
  projectId: "atirath-fa6f8",
  storageBucket: "atirath-fa6f8.firebasestorage.app",
  messagingSenderId: "47038516352",
  appId: "1:47038516352:web:db873777ca8375f2d26a65",
  measurementId: "G-LK4R98BET7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth, analytics };