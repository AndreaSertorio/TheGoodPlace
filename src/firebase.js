// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu-1kA4DlxxQNWA8cdyfJXqPwcZ6jS4Uc",
  authDomain: "thegoodplace-43112.firebaseapp.com",
  projectId: "thegoodplace-43112",
  storageBucket: "thegoodplace-43112.appspot.com",
  messagingSenderId: "115577291773",
  appId: "1:115577291773:web:624d6ddc2532983da24f94"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { db, auth, googleAuthProvider };
