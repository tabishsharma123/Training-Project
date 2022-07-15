import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCXts2L5eT6nlpa7dN6XkTRx2OWFiclkLY",
  authDomain: "loginform-19b26.firebaseapp.com",
  projectId: "loginform-19b26",
  storageBucket: "loginform-19b26.appspot.com",
  messagingSenderId: "945165599071",
  appId: "1:945165599071:web:ebad8ca335fbfc562ff6ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;