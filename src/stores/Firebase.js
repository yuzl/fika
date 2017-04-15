import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB8ZlYJyBBzoJMrEcgbM7NMqzMwEARY1pc",
  authDomain: "fika-f86d5.firebaseapp.com",
  databaseURL: "https://fika-f86d5.firebaseio.com",
  projectId: "fika-f86d5",
  storageBucket: "fika-f86d5.appspot.com",
  messagingSenderId: "341267026074"
};
firebase.initializeApp(config);

const root = firebase.database().ref();
const contacts = firebase.database().ref('users');
const expenses = firebase.database().ref('expenses');

const Fb = {
  root,
  contacts,
  expenses
};
export { Fb };
