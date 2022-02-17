import React from "react";
import Styles from "../Styles/summary.module.css";
import { Link } from "react-router-dom"; 
export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Tell us about yourself</h1>
          <p>With this info, recruiters will be able to find you</p>
        </div>
        <form action="">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <div className={Styles.emailcontainer}>
            <div className={Styles.emailbox}>
              <input type="email" />
            </div>
            <div className={Styles.emailcheck}>
              <input type="checkbox" />
              <label htmlFor="">Don't Show on my resume</label>
            </div>
          </div>

          <label>Street Address</label>
          <input type="text" />
          <label>City</label>
          <input type="text" className={Styles.city} />
          <label>Country</label>
          <input type="text" />
          <label>Phone Number</label>
          <input type="text" className={Styles.phone} />
          <Link to="/experience"><button className={Styles.btnSite}>SAVE & CONTINUE</button></Link>
        </form>
        <div className={Styles.back}>
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}
