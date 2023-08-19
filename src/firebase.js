import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBe9lnsisq6403eVoyfygnGu_fpWlpppiY",
  authDomain: "ngo-reinvigorate-foundation.firebaseapp.com",
  projectId: "ngo-reinvigorate-foundation",
  storageBucket: "ngo-reinvigorate-foundation.appspot.com",
  messagingSenderId: "549543359979",
  appId: "1:549543359979:web:d7532d64fedd77b65b55ae",
  measurementId: "G-79PYNDWCGF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
