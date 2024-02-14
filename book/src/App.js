import './App.css';
// import {getDatabase, ref, set} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {app} from "./firebase";
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import { useEffect, useState } from 'react';

// const db = getDatabase(app);
const auth = getAuth(app);

function App() {
  // const putData = () => {
  //   set(ref(db, "users/rakshath"), {
  //     id: 1,
  //     name: "Rakshath U Shetty",
  //     age: 21,
  //   });
  // };

  const [user, setUser] =useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        //Yes, oyu are logged in
        setUser(user);
      }
      else {
        console.log("You are logged out");
        setUser(null);
      }
    })
  }, []);

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "eng20cs0278.rakshath.u.shetty@gmail.com", "Rakshath.666")
    .then((value) => console.log(value));
  }

  if(user === null){
    return (
      <div className="App">
        <h1>Firebase React App</h1>
        {/* <button onClick={putData}>Put Data</button> */}
        {/* <button onClick={signupUser}>Put Data</button> */}
        <SignupPage />
        <SigninPage />
      </div>
    );
  }

  return (
    <div className='App'>
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default App;
