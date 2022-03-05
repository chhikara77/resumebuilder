import React, { useEffect, useState } from "react";
import Styles from "../Styles/login.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Login() {
  const send=useDispatch();
  const email = React.createRef(null);
  const password = React.createRef(null);
  const {userdetail} =useSelector((state)=>state) 
  const [user, setUser] = useState(userdetail);
  const navigatetohome = useNavigate();
  function signin() {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        const{uid,email,displayName}=user;
        alert("sigin successfull", user);
        setUser({
          uid:uid,
          email:email,
        });
        navigatetohome("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login unsuccessfull", errorCode, errorMessage);
      });
  }
  useEffect(()=> {
send({type:"USERDETAIL",payload:user})
  },[user]);
  return (
    <div className={Styles.formcard}>
      <h1>Sign in</h1>
      <div className={Styles.loginicon}>
        <i class="fa-brands fa-google-plus-g"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <p>or use your email account;</p>
      <div className={Styles.formbox}>
        <div className={Styles.inputbox}>
        <div className={Styles.input1}>
            <i class="fa-solid fa-envelope"></i>
              <input ref={email} type="email" placeholder="Email" />
        </div>
          <div className={Styles.input2}>
              <i class="fa-solid fa-lock"></i>
              <input ref={password} type="password" placeholder="Password"/>
          </div>
        </div>
        <a href="#">Forget Password?</a>
          <button
            onClick={signin}
            type="button"
          >
            SIGN IN
          </button>
        
      </div>
    </div>
  );
}
