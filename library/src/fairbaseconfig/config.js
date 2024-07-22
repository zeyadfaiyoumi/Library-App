import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { updateDoc } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5ggaEkitZSLCWBz4MeMox8HI7Uca0t3U",
  authDomain: "axios-77383.firebaseapp.com",
  databaseURL:
    "https://axios-77383-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "axios-77383",
  storageBucket: "axios-77383.appspot.com",
  messagingSenderId: "192508848636",
  appId: "1:192508848636:web:b9152d1be927bd4e386a79",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbURL =
  "https://axios-77383-default-rtdb.europe-west1.firebasedatabase.app";
export { dbURL };
