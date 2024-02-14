import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database";
import { createContext, useContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBjmUudNW168u4ZOKSuxGgmdI1FcSaawDk",
    authDomain: "app-6ea11.firebaseapp.com",
    projectId: "app-6ea11",
    storageBucket: "app-6ea11.appspot.com",
    messagingSenderId: "121636007243",
    appId: "1:121636007243:web:59a0b0d917a9f51b0e0cce",
    databaseURL: "https://app-6ea11-default-rtdb.firebaseio.com",
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext); //custom hook

//context provider with creating email and saving to db
export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const putData = (key, data) => set(ref(database, key), data);

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

