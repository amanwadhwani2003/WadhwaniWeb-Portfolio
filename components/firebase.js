import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBX3ZltfKVH9Kxr1VopP2-AvkrFCCf18E",
  authDomain: "portfolio-aman-wadhwani.firebaseapp.com",
  projectId: "portfolio-aman-wadhwani",
  storageBucket: "portfolio-aman-wadhwani.appspot.com",
  messagingSenderId: "951899069673",
  appId: "1:951899069673:web:c545bbd8b9276e3f176478",
  measurementId: "G-1CGBVL93V9"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only in the browser environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics };
