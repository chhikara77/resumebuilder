import React from 'react';
import Styles from "../Styles/experience.module.css";
import {Link} from "react-router-dom";

function Experience() {
  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.left}>
          <div className={Styles.step}>
          <p><span>3</span> UP NEXT:</p>
          <h1>WORK EXPERIENCE</h1>
          <ul>
            <li className={Styles.firststep}><span>Gather information about your accomplishments at previous jobs to fill in this section.</span></li>
            <li className={Styles.secondstep}><span>Need help to fill out your work experience? Simply click to add pre-written examples unique to your industry.</span></li>
            <li className={Styles.thirdstep}><span>Be sure to include keywords from the job posting. This will make your resume more attractive to recruiters.</span></li>
          </ul>
          <div className={Styles.tips}>
            <input type="checkbox" />
            <label >Don't show me tips pages in the future.</label>
          </div>
          <Link to="/experienceform"><button className={Styles.btnSite}>ENTER MY WORK EXPERIENCE</button></Link>
          </div>
        </div>
        <div className={Styles.right}>
          <img src="https://cdn1.resumenerd.com/images/tips/experience-desktop-tip.svg" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Experience