import React, { useEffect } from 'react';
import Styles from "../Styles/expsummary.module.css";
import {Link} from "react-router-dom";
import Resume1 from './Resume1';
import {useDispatch} from "react-redux";
import {useState} from "react";
import { useSelector } from 'react-redux';

function Summary() {
  const {jobtitle,company}=useSelector((state) => state.exp)
  const send =useDispatch();
  const[expsummary, setExpsummary] = useState({});
  function handlechange(e) {
          let {name,value} =e.target;
          setExpsummary({
            ...expsummary,
            [name]:value
          });
        }
     useEffect(() => {
         send({type:"EXPSUMMARY",payload:expsummary});
  },[expsummary])
  return (
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Work Experience</h1>
        <p>{jobtitle} {company}</p>
      </div>
      <form action="" className={Styles.form}>
          <textarea name="expsummary" onChange={handlechange} placeholder='Sell yourself for the job. Include 3-5 sentences. Customize your summary to the job you’re applying to.' id="" cols="30" rows="20"></textarea>
          <div className={Styles.editorbtn}>
          <i class="fa-solid fa-bold"></i>
          <i class="fa-solid fa-italic"></i>
          <i class="fa-solid fa-underline"></i>
          <i class="fa-solid fa-rotate-left"></i>
          <i class="fa-solid fa-rotate-right"></i>
          <i class="fa-solid fa-spell-check"></i>
          <i class="fa-solid fa-list-check"></i>
               </div>
        <Link to="/educationform"><button className={Styles.btnSite}>SAVE & CONTINUE</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/experienceform">Back</Link>
      </div>
    </div>
    <div className={Styles.liveresume}>
      <Resume1 fontSize="10px"/>
      </div>
  </div>
  )
}

export default Summary