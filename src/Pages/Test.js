import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";


const Test = () => {
  const email = React.createRef(null);
  const password = React.createRef(null);
  const lemail = React.createRef(null);
  const lpassword = React.createRef(null);

  function signup() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("ho gya")
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       alert("kuch to gadbad hai daya",errorMessage) 
      });
  }

  function signin() {
   

    const auth = getAuth();
    signInWithEmailAndPassword(auth, lemail.current.value, lpassword.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("sigin succes")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login error",error)
      });
  }
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        zIndex:100
      }}
    >
      <input ref={email} type="text" placeholder="username" />
      <input ref={password} type="text" placeholder="password" />
      <button onClick={signup}>signup</button>
      <div>for sign in</div>
      <input ref={lemail} type="text" placeholder="username" />
      <input ref={lpassword} type="text" placeholder="password" />
      <button onClick={signin}>signin</button>
    </div>
  );
};

export default Test;
