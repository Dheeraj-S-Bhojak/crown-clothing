import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7mPxEhE3DC-pcp3vejh0WHHBuB0ziBTM",
  authDomain: "crwn-clothing-db-fe79c.firebaseapp.com",
  projectId: "crwn-clothing-db-fe79c",
  storageBucket: "crwn-clothing-db-fe79c.appspot.com",
  messagingSenderId: "320143628124",
  appId: "1:320143628124:web:e67bc711ef13abaf36d399",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  console.log("hello user", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
      console.log("user created");
    } catch (error) {
      console.log("Error: creating new user", error.message);
    }
  }
  return userDocRef;
};
