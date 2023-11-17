// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDD75gfkzBDX5GzU71djJq5wNR0CWhZp5o",
  authDomain: "zeynepezgisivas-44635.firebaseapp.com",
  projectId: "zeynepezgisivas-44635",
  storageBucket: "zeynepezgisivas-44635.appspot.com",
  messagingSenderId: "768984079545",
  appId: "1:768984079545:web:5a22cd4731ef96f9ba4f68",
  measurementId: "G-09Z8QQH6YD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
