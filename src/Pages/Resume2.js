
import Styles from "../Styles/resume2.module.css";
import { useSelector } from "react-redux";
import React from "react";

function Resume1({ fontSize }) {
  const fontSizeValue = fontSize ? fontSize : "16px";

  const store =useSelector((state) =>state);
  const {contact,edu,exp,expsummary,summary,skills,document} =store;
  const resumeColor = "resumeBgColor" + document.color;
  return (
    <div  className={`${Styles.resumecontainer} ${Styles[document.fontSize]} ${Styles[document.fontFamily]}`} style={{ fontSize: fontSizeValue }}>
      <div className={`${Styles.left} ${Styles[resumeColor]}`}>
        <div className={Styles.personaldetail }>
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
            <div
              className={`${Styles.titleBar} ${Styles[resumeColor]}`}
            >
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
              <p><strong>{exp.jobtitle}</strong> { exp.company} {exp.startmonth} {exp.startyear} {exp.endmonth} {exp.endyear} {exp.city} {exp.country}</p>
              <p>{expsummary.expsummary}</p>
            </div>
          </div>
          <div className={Styles.education}>
            <div className={`${Styles.titleBar} ${Styles[resumeColor]}`}>
              <h5>education</h5>
            </div>
            <div className={Styles.properties}>
            <p><strong>{edu.degree}</strong></p>
              <p>{edu.school} {edu.city} </p>
              <p>{edu.country}</p>
              <p>{edu.gradmonth} {edu.gradyear}</p>
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
