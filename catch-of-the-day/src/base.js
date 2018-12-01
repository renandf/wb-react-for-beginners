import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwUTDBDpJAdN0M6IJqxtQp9u6P1_jExBQ",
  authDomain: "catch-of-the-day-renan.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-renan.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;