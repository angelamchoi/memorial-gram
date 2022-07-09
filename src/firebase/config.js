import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71fyVldSEl6xhXgfgnagAIPiFNAHlxBM",
  authDomain: "memorial-firegram.firebaseapp.com",
  projectId: "memorial-firegram",
  storageBucket: "memorial-firegram.appspot.com",
  messagingSenderId: "388663957074",
  appId: "1:388663957074:web:3d69265e96b798ae32f18b"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };