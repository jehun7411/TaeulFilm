import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtXChZMYSDC3IVki_rmPx_RaRMMxjfAJ8",
  authDomain: "taeulfilm.firebaseapp.com",
  projectId: "taeulfilm",
  storageBucket: "taeulfilm.appspot.com",
  messagingSenderId: "782029428320",
  appId: "1:782029428320:web:470f926c78dd85c4105505",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const firestore = firebase.firestore();
