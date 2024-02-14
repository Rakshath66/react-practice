import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBjmUudNW168u4ZOKSuxGgmdI1FcSaawDk",
    authDomain: "app-6ea11.firebaseapp.com",
    projectId: "app-6ea11",
    storageBucket: "app-6ea11.appspot.com",
    messagingSenderId: "121636007243",
    appId: "1:121636007243:web:59a0b0d917a9f51b0e0cce",
    databaseURL: "https://app-6ea11-default-rtdb.firebaseio.com",
  };

export const app = initializeApp(firebaseConfig);