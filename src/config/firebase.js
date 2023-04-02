import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDgZn9rKmyF1-s0WEoHnDa8pYLnAPQZ1gg",
  authDomain: "tiktok-clone-1d982.firebaseapp.com",
  projectId: "tiktok-clone-1d982",
  storageBucket: "tiktok-clone-1d982.appspot.com",
  messagingSenderId: "872498227623",
  appId: "1:872498227623:web:c5aeb01d4e79115ca46e82",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
