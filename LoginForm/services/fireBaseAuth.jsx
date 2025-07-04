import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnrbdNnwYDRR4961airZFL-BcS_kHHpKE",
  authDomain: "react-native-auth-demo-b8c87.firebaseapp.com",
  projectId: "react-native-auth-demo-b8c87",
  storageBucket: "react-native-auth-demo-b8c87.firebasestorage.app",
  messagingSenderId: "1043365493316",
  appId: "1:1043365493316:web:e016c338e69123f7ef1a11",
};
let auth;
if (getApps().length == 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  auth = getAuth();
}

export default auth;
