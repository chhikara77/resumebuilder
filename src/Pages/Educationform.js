import React from 'react';
import { Link } from 'react-router-dom';
import Styles from "../Styles/educationform.module.css"
import Resume1 from './Resume1';

function Educationform() {
  return (
    
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Education</h1>
        <p>Start with your most recent education.</p>
      </div>
      <form action="" className={Styles.form}>
        <label>School Name</label>
        <input type="text" />
        <div className={Styles.address}>
            <div>
                <label>City/Town</label>
                <input type="text" />
            </div>
            <div>
                <label>Country</label>
                <input type="text" />
            </div>
        </div>
        <label>Degree</label>
        <input type="text" />
        <label>Graduation Date</label>
        <div className={Styles.graddate}>
            <div>
                
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
        </div>
        <div className={Styles.desc}>
           <a href="#">+ Add description or special awards</a> 
        </div>
        <Link to="/skillsform"><button className={Styles.btnSite}>ENTER JOB DESCRIPTION</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/experienceform">Back</Link>
      </div>
    </div>
    <div className={Styles.liveresume}>
      <Resume1 />
      </div>
  </div>
  )
}

export default Educationform