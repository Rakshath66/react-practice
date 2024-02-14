import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Success"));
    }

    const signupWithGoogle = () => {
        signInWithPopup(auth, googleProvider);
    }

    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
             <label>Email</label>
             <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Email" />
             <label>Password</label>
             <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder="Enter Password" />
             <br />
             <button onClick={signupWithGoogle}>Signin with Google</button>
             <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default SignupPage;