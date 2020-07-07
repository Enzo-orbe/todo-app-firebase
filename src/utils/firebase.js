import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6wO0alGYqL1rBqZNVDbXs6mnRC-3UEWc",
  authDomain: "todo-c0e62.firebaseapp.com",
  databaseURL: "https://todo-c0e62.firebaseio.com",
  projectId: "todo-c0e62",
  storageBucket: "todo-c0e62.appspot.com",
  messagingSenderId: "400412059933",
  appId: "1:400412059933:web:b054579baf14ac5a2e99f4",
};

export default firebase.initializeApp(firebaseConfig);
