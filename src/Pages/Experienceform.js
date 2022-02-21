import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/experienceform.module.css";
import Resume1 from "./Resume1";

function Experienceform() {
  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Work Experience</h1>
          <p>Start with your most recent position.</p>
        </div>
        <form action="" className={Styles.form}>
          <label>Job Title</label>
          <input type="text" />
          <label>Company</label>
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
          <label>Start Date</label>
          <div className={Styles.startdate}>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <label>End Date</label>
          <div className={Styles.enddate}>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.workcheckbox}>
            <input type="checkbox" />
            <label>Currently Work Here</label>
          </div>
          <Link to="/educationform">
            <button className={Styles.btnSite}>ENTER JOB DESCRIPTION</button>
          </Link>
        </form>
        <div className={Styles.back}>
          <Link to="/experience">Back</Link>
        </div>
      </div>
      <div className={Styles.liveresume}>
        <Resume1 />
      </div>
    </div>
  );
}

export default Experienceform;
