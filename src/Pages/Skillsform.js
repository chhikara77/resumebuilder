import React, { useEffect, useState } from 'react';
import Styles from "../Styles/skillsform.module.css";
import {Link} from "react-router-dom";
import Resume1 from './Resume1';
import { useDispatch } from 'react-redux';



function Skillsform() {
  const send =useDispatch();
  const [skill, setSkill] = useState([]);

  function handlechange(e) {
    const{name,value} = e.target;
    setSkill([
      ...skill,
      value
    ]);
  }

  useEffect(() => {
    send({type:"SKILLS",payload:skill});
  },[skill])
  // let skillarr=[1];
  // function createskill() {
  //       skill
  // }
  
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
                <input type="text" name="skill1" onChange={handlechange} placeholder='Skills #1'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" name="skill2" onChange={handlechange} placeholder='Skills #2'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" name="skill3" onChange={handlechange} placeholder='Skills #3'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" name="skill4" onChange={handlechange} placeholder='Skills #4'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" name="skill5" onChange={handlechange} placeholder='Skills #5'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" name="skill6" onChange={handlechange} placeholder='Skills #6'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" name="skill7" onChange={handlechange} placeholder='Skills #7'/>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>

        <div className={Styles.desc}>
           <a  href="#">+ Add another skill</a> 
        </div>
        <Link to="/summary"><button className={Styles.btnSite}>SAVE & CONTINUE</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/educationform">Back</Link>
      </div>
    </div>
    <div className={Styles.liveresume}>
      <Resume1 fontSize="10px"/>
      </div>
  </div>
  )
}

export default Skillsform