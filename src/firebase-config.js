// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAiC_soKmGELzuf5cp5m8flhTWawQhNUE",
  authDomain: "lgmvip-web-task-3.firebaseapp.com",
  projectId: "lgmvip-web-task-3",
  storageBucket: "lgmvip-web-task-3.appspot.com",
  messagingSenderId: "731769937348",
  appId: "1:731769937348:web:2f0fb17a2622c38af25891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;