import Styles from "../Styles/resume1.module.css";
import { useSelector } from "react-redux";
import React from "react";

function Resume1({ fontSize }) {
  const fontSizeValue = fontSize ? fontSize : "16px";

  const store = useSelector((state) => state);
  console.log("from resume1",fontSizeValue);
  const { contact, edu, exp, expsummary, summary, skills, document } = store;
  const resumeColor = "resumeBgColor" + document.color;

  function experienceString(exp) {
    let result = exp.company;
    if (exp.startmonth) result += ", ";
    if (exp.startmonth) {
      result +=exp.startmonth + "-" + exp.startyear;
    }
    if (exp.endmonth) {
      result += ", " + exp.endmonth + "-" + exp.endyear;
    }
    if(exp.city){
      result += ", "+exp.city + ", " + exp.country;
    }
    return result;
  }

  console.log(exp.company);
  return (
    <div
      className={`${Styles.resumecontainer} ${Styles[document.fontSize]} ${
        Styles[document.fontFamily]
      }`}
      style={{ fontSize: fontSizeValue }}
    >
      <div className={`${Styles.left} ${Styles[resumeColor]}`}>
        <div className={Styles.personaldetail}>
          <h3 className={Styles.name}>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.street}</p>
          <p>{contact.city}</p>
          <p>{contact.country}</p>
          <p>{contact.phone}</p>
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.domaindetail}>
          <div className={Styles.summary}>
            <div className={`${Styles.titleBar} ${Styles[resumeColor]}`}>
              <h5>professional summary</h5>
            </div>
            <div className={Styles.properties}>
              <p>{summary.summary}</p>
            </div>
          </div>
          <div className={Styles.skills}>
            <div className={`${Styles.titleBar} ${Styles[resumeColor]}`}>
              <h5>skills</h5>
            </div>
            <div className={Styles.properties}>
              <ul>
                {skills.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Styles.experience}>
            <div className={`${Styles.titleBar} ${Styles[resumeColor]}`}>
              <h5>experience</h5>
            </div>
            <div className={Styles.properties}>
              <p>
                <strong>{exp.jobtitle?exp.jobtitle+", ":""}  </strong>
                {experienceString(exp)}
              </p>
              <p>{expsummary.expsummary}</p>
            </div>
          </div>
          <div className={Styles.education}>
            <div className={`${Styles.titleBar} ${Styles[resumeColor]}`}>
              <h5>education</h5>
            </div>
            <div className={Styles.properties}>
              <p>
                <strong>{edu.degree}</strong>
              </p>
              <p>
                {edu.school} {edu.city}{" "}
              </p>
              <p>{edu.country}</p>
              <p>
                {edu.gradmonth} {edu.gradyear}
              </p>
            </div>
          </div>
          <div className={Styles.extracurricular}>
            <div className={`${Styles.titleBar} ${Styles[resumeColor]}`}>
              <h5>extracurricular</h5>
            </div>
            <div className={Styles.properties}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume1;
