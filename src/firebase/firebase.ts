import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBrw780EovHg4dHjlKZ8JNfYv31VAkg6UU",
  authDomain: "aniactyyyy.firebaseapp.com",
  databaseURL: "https://aniactyyyy.firebaseio.com",
  projectId: "aniactyyyy",
  storageBucket: "aniactyyyy.appspot.com",
  messagingSenderId: "58152945025",
  appId: "1:58152945025:web:ea9b10adb717a502199480"
};


const app = initializeApp(config);

export const db = getFirestore(app);
export const configuracao = config;