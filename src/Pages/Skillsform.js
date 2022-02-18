import React from 'react';
import Styles from "../Styles/skillsform.module.css";
import {Link} from "react-router-dom";

function Skillsform() {
  return (
    
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Skills</h1>
        <p>Add a few skills to show employers what you're good at.</p>
      </div>
      <form action="" className={Styles.form}>
    
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>

        <div className={Styles.desc}>
           <a href="#">+ Add another skill</a> 
        </div>
        <Link to="/summary"><button className={Styles.btnSite}>SAVE & CONTINUE</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/educationform">Back</Link>
      </div>
    </div>
  </div>
  )
}

export default Skillsform