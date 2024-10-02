// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Eğer analytics kullanacaksanız aşağıdaki satırı ekleyin
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCcvwmXpmOc1TrgurgGMWjJ_bkd67HM_tw",
  authDomain: "gencsafa-49a9d.firebaseapp.com",
  projectId: "gencsafa-49a9d",
  storageBucket: "gencsafa-49a9d.appspot.com",
  messagingSenderId: "679942186600",
  appId: "1:679942186600:web:245e148504ea98888dfddd",
  measurementId: "G-F2Q7D8ZCYJ"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Analytics'i başlat (eğer kullanacaksanız)
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
