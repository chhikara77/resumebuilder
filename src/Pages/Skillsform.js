import React, { useEffect, useState } from "react";
import Styles from "../Styles/skillsform.module.css";
import { Link } from "react-router-dom";
import Resume1 from "./Resume1";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {updateDoc,doc} from "firebase/firestore";
import { db } from "..";

function Skillsform() {

  const prevstate =useSelector((state) => state.skills);
  const uid = useSelector((state)=>state.userdetails.uid);
  
  async function sendskills() {
    if(uid){
      try {
        const docRef=doc(db,"user",uid);
        await updateDoc(docRef, {
          skills:prevstate
        });
        console.log("data saved");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }


  const send = useDispatch();
  const skills = useSelector((state)=>state.skills)
  const [skillarray, setSkillarray] = useState(skills);
  function handlechange(id,e) {
    skillarray[id] = e.target.value;
    console.log(skillarray,id,e.target.value)
    setSkillarray([...skillarray])
  }
  
  useEffect(() => {
    send({ type: "SKILLS", payload: skillarray });
  }, [skillarray]);

  function onDelete(e) {
    setSkillarray([
      ...skillarray.slice(0,-1)
    ])
  }
  function createskill() {
    setSkillarray([...skillarray,""])
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Skills</h1>
          <p>Add a few skills to show employers what you're good at.</p>
        </div>
        <form className={Styles.form}>
          
          {skillarray.map((ele,index) => {
            return (
              <div key={index} className={Styles.skills}>
                <div className={Styles.updown}>
                  <i class="fa-solid fa-arrows-up-down"></i>
                </div>
                <div className={Styles.input}>
                  <input
                    type="text"
                    onChange={(e)=>handlechange(index,e)}
                    value={ele}
                    placeholder={"Skills #" + index}
                  />
                  <i name={index} onClick={onDelete} class="fa-solid fa-trash"></i>
                </div>
              </div>
            );
          })}

          <div className={Styles.desc}>
            <a onClick={createskill} href="#">
              + Add another skill
            </a>
          </div>
          <Link to="/summary">
            <button onClick={sendskills} className={Styles.btnSite}>SAVE & CONTINUE</button>
          </Link>
        </form>
        <div className={Styles.back}>
          <Link to="/educationform">Back</Link>
        </div>
      </div>
      <div className={Styles.liveresume}>
        <Resume1 fontSize="10px" />
      </div>
    </div>
  );
}

export default Skillsform;
