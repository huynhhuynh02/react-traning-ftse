import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDsf5VrGcfe3XjR3n1C3OTfhPaOuqYFwKA",
    authDomain: "chatapp-8779b.firebaseapp.com",
    databaseURL: "https://chatapp-8779b-default-rtdb.firebaseio.com",
    projectId: "chatapp-8779b",
    storageBucket: "chatapp-8779b.appspot.com",
    messagingSenderId: "961867580450",
    appId: "1:961867580450:web:6e24cb762bf4cf0b7d767b",
    measurementId: "G-JHPQHHVXW7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, password } = user;
    try {
      await userRef.set({
        email,
        password,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
export default firebase;