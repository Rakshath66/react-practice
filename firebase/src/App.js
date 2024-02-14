import './App.css';
// import {getDatabase, ref, set} from "firebase/database";
import { useFirebase } from './context/Firebase';
import { useState } from 'react';

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");


  // const putData = () => {
  //   set(ref(db, "users/rakshath"), {
  //     id: 1,
  //     name: "Rakshath U Shetty",
  //     age: 21,
  //   });
  // };

  // const signupUser = () => {
  //   createUserWithEmailAndPassword(auth, "eng20cs0278.rakshath.u.shetty@gmail.com", "Rakshath.666")
  //   .then((value) => console.log(value));
  // }

  return (
    <div className="App">
      <h1>Firebase</h1>
      
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Email" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder="Enter Password" />
      <button onClick={() => {
        firebase.signupUserWithEmailAndPassword(email, password);
        firebase.putData("users/" + "rakshathhh", {email, password});
        alert("success");
        }}>Signup</button>
    </div>
  );
}

export default App;
