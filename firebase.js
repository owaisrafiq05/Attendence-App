import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAIS57hnS5VOA7rgAE_LMH0pQj7G2VwFqk",
  authDomain: "attendence-app-726de.firebaseapp.com",
  projectId: "attendence-app-726de",
  storageBucket: "attendence-app-726de.appspot.com",
  messagingSenderId: "490645194193",
  appId: "1:490645194193:web:b42e8724dc62a20351ccf0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
    app, auth, provider
}