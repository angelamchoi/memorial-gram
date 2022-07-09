import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


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

const app = initializeApp(firebaseConfig);

// export default getFirestore();
export { getFirestore, getStorage };