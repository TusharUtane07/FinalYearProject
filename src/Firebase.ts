import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBG2IygpqkMbGNlXdbD__FkUwZnPqAl7yc",
  authDomain: "finalyearproject-db046.firebaseapp.com",
  projectId: "finalyearproject-db046",
  storageBucket: "finalyearproject-db046.appspot.com",
  messagingSenderId: "68994321018",
  appId: "1:68994321018:web:234362951dbdc618e149c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth}