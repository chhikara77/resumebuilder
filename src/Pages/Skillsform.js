import React, { useEffect, useState } from "react";
import Styles from "../Styles/skillsform.module.css";
import { Link } from "react-router-dom";
import Resume1 from "./Resume1";
import { useDispatch } from "react-redux";

function Skillsform() {
  const send = useDispatch();
  const [skill, setSkill] = useState([]);
  const [skillarray, setSkillarray] = useState([0,1]);

  function handlechange(e) {
    const { value } = e.target;
    console.log(value);
    setSkill([...skill, value]);
  }
  

  useEffect(() => {
    send({ type: "SKILLS", payload: skill });
  }, [skill]);

  function createskill() {
    setSkillarray([...skillarray,skillarray.length])
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Skills</h1>
          <p>Add a few skills to show employers what you're good at.</p>
        </div>
        <form className={Styles.form}>
          {skillarray.map((index) => {
            return (
              <div key={index} className={Styles.skills}>
                <div className={Styles.updown}>
                  <i class="fa-solid fa-arrows-up-down"></i>
                </div>
                <div className={Styles.input}>
                  <input
                    type="text"
                    name={"skill" + index}
                    onChange={handlechange}
                    placeholder={"Skills #" + index}
                  />
                  <i class="fa-solid fa-trash"></i>
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
            <button className={Styles.btnSite}>SAVE & CONTINUE</button>
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
