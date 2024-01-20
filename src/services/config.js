import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsRm2CyHQ2TAdRNdmfHMTP-nuCJjH_HIs",
  authDomain: "kakapo-t.firebaseapp.com",
  projectId: "kakapo-t",
  storageBucket: "kakapo-t.appspot.com",
  messagingSenderId: "440442870142",
  appId: "1:440442870142:web:e462e3bb8deb1e78b37b2f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
