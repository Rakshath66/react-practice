import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
import React, { useState } from "react";

const auth = getAuth(app);

const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => console.log("Success Login"))
        .catch((err) => console.log(err));
    }
   
    return (
        <div className="signin-page">
           <h1>Signin Page</h1>
           <label>Email</label>
           <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email" />
           <label>Password</label>
           <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password" />
           <button onClick={signinUser}>Sign me in</button>
        </div>
    )
}

export default SigninPage;