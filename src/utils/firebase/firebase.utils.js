import { initializeApp } from "firebase/app";

//import firebase auth function
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// import fireStore function from fireBase
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

/**
 * firebaseConfig
 * web app's Firebase configuration
 */
const firebaseConfig = {
  apiKey: "AIzaSyA7mPxEhE3DC-pcp3vejh0WHHBuB0ziBTM",
  authDomain: "crwn-clothing-db-fe79c.firebaseapp.com",
  projectId: "crwn-clothing-db-fe79c",
  storageBucket: "crwn-clothing-db-fe79c.appspot.com",
  messagingSenderId: "320143628124",
  appId: "1:320143628124:web:e67bc711ef13abaf36d399",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// it is google authentic provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

//for authorized of user
export const auth = getAuth();

/**
 * signInWithGooglePopup
 * @returns authUser
 */
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

/**
 * signInWithGoogleRedirect
 * @returns authUser
 */
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

/**
 * addCollectionAndDocument
 * it import object and store data on fireBase
 * @param {String}collectionKey
 * @param {Object } ObjectsToAdd
 */
export const addCollectionAndDocument = async (collectionKey, ObjectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  ObjectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

/**
 * getCategoriesAndDocument
 * it connect to fire base and fetch categories data
 * @return {object}
 */
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  //   .reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // return categoryMap;
};

/**
 * createUserDocumentFromAuth
 * create user with google auth in fireBase
 * @param {Object} userAuth
 * @returns
 */
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

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

/**
 * createAuthUserWithEmailAndPassword
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * signInAuthUserWithEmailAndPassword
 * @param {String} email
 * @param {String} password
 * @returns{Object}
 */
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * signOutUser
 * @returns
 */
export const signOutUser = async () => await signOut(auth);

/**
 *onAuthStateChangedListener
 it is the observer of user auth 
 * @param {*} callback
 * @returns
 */
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
