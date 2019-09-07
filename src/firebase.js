import firebase from 'firebase';
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL0LAlYJ8k7feDiYXaHJQsOp0ooQs34ZA",
  authDomain: "toto-love.firebaseapp.com",
  databaseURL: "https://toto-love.firebaseio.com",
  projectId: "toto-love",
  storageBucket: "toto-love.appspot.com",
  messagingSenderId: "907413631628",
  appId: "1:907413631628:web:56e13808f657a028bd01a9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
