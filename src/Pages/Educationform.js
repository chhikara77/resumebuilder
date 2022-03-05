import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Styles from "../Styles/educationform.module.css"
import Resume1 from './Resume1';

function Educationform() {
  const send=useDispatch();
  const [edu, setEdu] = useState({});
  function handlechange(e) {
    const {name,value} =e.target;
    setEdu({
      ...edu,
      [name]:value
    })
  }
  useEffect(() => {
    send({type:"EDUCATION",payload:edu})
  },[edu])
  return (
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Education</h1>
        <p>Start with your most recent education.</p>
      </div>
      <form action="" className={Styles.form}>
        <label>School Name</label>
        <input name="school" onChange={handlechange} type="text" />
        <div className={Styles.address}>
            <div>
                <label>City/Town</label>
                <input name="city" onChange={handlechange} type="text" />
            </div>
            <div>
                <label>Country</label>
                <input name="country" onChange={handlechange} type="text" />
            </div>
        </div>
        <label>Degree</label>
        <input name="degree" onChange={handlechange} type="text" />
        <label>Graduation Date</label>
        <div className={Styles.graddate}>
            <div>
                <select onChange={handlechange} name="gradmonth"  >
                 <option value="0">Month</option>
                  <option onChange={handlechange}  value="1">January</option>
                  <option onChange={handlechange}  value="2">February</option>
                  <option onChange={handlechange}  value="3">March</option>
                  <option onChange={handlechange}  value="4">April</option>
                  <option onChange={handlechange}  value="5">May</option>
                  <option onChange={handlechange}  value="6">June</option>
                  <option onChange={handlechange}  value="7">July</option>
                  <option onChange={handlechange}  value="8">August</option>
                  <option onChange={handlechange}  value="9">September</option>
                  <option onChange={handlechange}  value="10">October</option>
                  <option onChange={handlechange}  value="11">November</option>
                  <option onChange={handlechange}  value="12">December</option>
                </select>
            </div>
            <div>
              <select onChange={handlechange} name="gradyear" >
                <option value="0">Year</option>
                <option onChange={handlechange}>2025</option>
                <option onChange={handlechange}>2024</option>
                <option onChange={handlechange}>2023</option>
                <option onChange={handlechange}>2022</option>
                <option onChange={handlechange}>2021</option>
                <option onChange={handlechange}>2020</option>
                <option onChange={handlechange}>2019</option>
                <option onChange={handlechange}>2018</option>
                <option onChange={handlechange}>2017</option>
                <option onChange={handlechange}>2016</option>
                <option onChange={handlechange}>2015</option>
                <option onChange={handlechange}>2014</option>
                <option onChange={handlechange}>2013</option>
                <option onChange={handlechange}>2012</option>
                <option onChange={handlechange}>2011</option>
                <option onChange={handlechange}>2010</option>
              </select>
              
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
      <Resume1 fontSize="10px"/>
      </div>
  </div>
  )
}

export default Educationform