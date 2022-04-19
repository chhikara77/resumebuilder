import React, { useEffect,useState } from 'react';
import Styles from "../Styles/summary.module.css";
import {Link} from "react-router-dom";
import Resume1 from './Resume1';
import {useDispatch,useSelector} from "react-redux";
import {updateDoc,doc} from "firebase/firestore";
import { db } from "..";

function Summary() {
  const prevstate =useSelector((state) => state.summary);
  const uid = useSelector((state)=>state.userdetails.uid);
  const send =useDispatch();
  
  async function sendsummary() {
    if(uid){
      try {
        const docRef=doc(db,"user",uid);
        await updateDoc(docRef, {
          summary:prevstate
        });
        console.log("data saved");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  const[summary, setSummary] = useState({});
  function handlechange(e) {
          let {name,value} =e.target;
          setSummary({
            ...summary,
            [name]:value
          });
        }
     useEffect(() => {
         send({type:"SUMMARY",payload:summary});
  },[summary])
  return (
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Summary</h1>
        <p>Briefly describe the value that you bring through your skills, background and experience.</p>
      </div>
      <form action="" className={Styles.form}>
          <textarea value={prevstate.summary} name="summary" onChange={handlechange} placeholder='Sell yourself for the job. Include 3-5 sentences. Customize your summary to the job you’re applying to.' id="" cols="30" rows="20"></textarea>
          <div className={Styles.editorbtn}>
          <i class="fa-solid fa-bold"></i>
          <i class="fa-solid fa-italic"></i>
          <i class="fa-solid fa-underline"></i>
          <i class="fa-solid fa-rotate-left"></i>
          <i class="fa-solid fa-rotate-right"></i>
          <i class="fa-solid fa-spell-check"></i>
          <i class="fa-solid fa-list-check"></i>
               </div>
        <Link to="/finalize"><button onClick={sendsummary} className={Styles.btnSite}>SAVE & CONTINUE</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/skillsform">Back</Link>
      </div>
    </div>
    <div className={Styles.liveresume}>
      <Resume1 fontSize="10px"/>
      </div>
  </div>
  )
}

export default Summary