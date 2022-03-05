import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc,doc,collection } from 'firebase/firestore';
import { db } from '..';
import { useSelector } from 'react-redux';

export default function Signup() {
    const email = React.createRef(null);
    const password = React.createRef(null);
    const resumedata =useSelector(state => state)
    console.log(resumedata);
    function signup() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
           setDoc(doc(db,"user",userCredential.user.uid), {
              ...resumedata
          });
        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           alert(errorCode) 
          });
      }

    return (
        <div class="form-card">
            <h2 class="form-heading center">Enter your details</h2>
            <div class="form-section">
                <div class="input-group full">
                    <label>Email</label>
                    <div class="effect">
                        <input ref={email} type="email" name="email"  />
                    </div>
                </div>
                <div class="input-group full">
                    <label>Password</label>
                    <div class="effect">
                        <input ref={password} type="password" name="password"  />
                    </div>
                </div>
                <div class="form-buttons">
                    <button onClick={signup} class="btn hvr-float-shadow" type="button">Register</button>
                </div>
            </div>
        </div>
    )
}
