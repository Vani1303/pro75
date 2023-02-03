import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAMtvo0ich4Ah7WiwGJhu4p-5k5bAtpNak",
  authDomain: "riding-game-pro75.firebaseapp.com",
  databaseURL: "https://riding-game-pro75-default-rtdb.firebaseio.com",
  projectId: "riding-game-pro75",
  storageBucket: "riding-game-pro75.appspot.com",
  messagingSenderId: "413396664728",
  appId: "1:413396664728:web:d755c506f7a00c4a8f2bed"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
