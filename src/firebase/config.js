import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-6Lq2PFyJbGGj_GGa-7JTTcH7jtabTmE",
  authDomain: "pi-levene-moneta.firebaseapp.com",
  projectId: "pi-levene-moneta",
  storageBucket: "pi-levene-moneta.firebasestorage.app",
  messagingSenderId: "645683069045",
  appId: "1:645683069045:web:e80b4dbfc6b6ec6ce6f83c"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();

export default app;
