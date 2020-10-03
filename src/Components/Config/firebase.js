// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxENvj0puNVgFAcT1cONTJYqE3So3wcvU",
  authDomain: "slack-clone-e61ba.firebaseapp.com",
  databaseURL: "https://slack-clone-e61ba.firebaseio.com",
  projectId: "slack-clone-e61ba",
  storageBucket: "slack-clone-e61ba.appspot.com",
  messagingSenderId: "245323894967",
  appId: "1:245323894967:web:f15d046e7ac1f55fc8fd32",
  measurementId: "G-TQF1H4490C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
