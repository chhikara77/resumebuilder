import React from 'react'
import Styles from "../Styles/home.module.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.left}>
          <div className={Styles.step}>
          <p><span>3</span> SIMPLE STEPS</p>
          <h1>Getting Started</h1>
          <ul>
            <li className={Styles.firststep}><span>Save time using pre-written bullets crafted by resume experts.</span></li>
            <li className={Styles.secondstep}><span>Select a recruiter approved template that will get your resume noticed.</span></li>
            <li className={Styles.thirdstep}><span>Download or print your new resume!</span></li>
          </ul>
          <Link to="/howto"><button className={Styles.btnSite}>CONTINUE</button></Link>
          
          <div className={Styles.privacy}>
            <p>By clicking <span>"Continue"</span>, you agree to our
            <a href="#"> Terms and Conditions</a> and <a href="#">Privacy Policy</a>
            </p>
          </div>
          </div>
        </div>
        <div className={Styles.right}>
          <img src="https://cdn2.resumenerd.com/images/tips/hiws.svg" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Home