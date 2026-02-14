import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFuWQ3iwhmschmrs0x6MwMy_shykX_T0U",
  authDomain: "tentwala-011005.firebaseapp.com",
  projectId: "tentwala-011005",
  storageBucket: "tentwala-011005.firebasestorage.app",
  messagingSenderId: "709836460770",
  appId: "1:709836460770:web:c6a1e67c5701b2a8c704bb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
