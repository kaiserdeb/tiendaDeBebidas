import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIMlj0W-H3MS5MMVYgS3DEY3tdFJ06d74",
  authDomain: "tienda-de-bebidas-804ff.firebaseapp.com",
  projectId: "tienda-de-bebidas-804ff",
  storageBucket: "tienda-de-bebidas-804ff.appspot.com",
  messagingSenderId: "864811190840",
  appId: "1:864811190840:web:9607d93cfb66665d0d74cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;