// firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBAwwddAnM5DhrHNmFYSjV2GMDQddHDFoU",
  authDomain: "bobsfightnews.firebaseapp.com",
  databaseURL: "https://bobsfightnews-default-rtdb.firebaseio.com",
  projectId: "bobsfightnews",
  storageBucket: "bobsfightnews.appspot.com",
  messagingSenderId: "1069009978943",
  appId: "1:1069009978943:web:362f9a0911eff241065a8a",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);

export { database };
