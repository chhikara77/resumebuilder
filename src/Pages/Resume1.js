import React, { useEffect, useState } from "react";
import Styles from "../Styles/resume1.module.css";
import { useSelector } from "react-redux";

function Resume1({ fontSize }) {
  const fontSizeValue = fontSize ? fontSize : "14px";

  const resumeColorValue = useSelector(
    (state) => state.Contactpagereducer.document.color
  );

  const resumeColor = "resumeBgColor" + resumeColorValue;
  const contactData = useSelector((state) => state.Contactpagereducer);
  const obj = [];
  const [document, setDocument] = useState(contactData.document);

  useEffect(() => {
    console.log(document);
  }, [document]);
  const con = useSelector((state) => state.Contactpagereducer.contact);
  const sum = useSelector((state) => state.Contactpagereducer.summary);

  return (
    <div className={Styles.resumecontainer} style={{ fontSize: fontSizeValue }}>
      <div className={`${Styles.left} ${resumeColor}`}>
        <div className={Styles.personaldetail}>
          <h3 className={Styles.name}>{con.name}</h3>
          <p>{con.email}</p>
          <p>{con.street}</p>
          <p>{con.city}</p>
          <p>{con.country}</p>
          <p>{con.phone}</p>
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.domaindetail}>
          <div className={Styles.summary}>
            <div
              className={`${Styles.titleBar} ${Styles.resumeBgColor + "Green"}`}
            >
              <h5>professional summary</h5>
            </div>
            <div className={Styles.properties}>
              <p>{sum.summary}</p>
            </div>
          </div>
          <div className={Styles.skills}>
            <div className={`${Styles.titleBar} ${Styles.resumeBgColor}`}>
              <h5>skills</h5>
            </div>
            <div className={Styles.properties}>
              <ul>
                {obj.map((list) => (
                  <li>{list}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Styles.experience}>
            <div className={`${Styles.titleBar} ${Styles.resumeBgColor}`}>
              <h5>experience</h5>
            </div>
            <div className={Styles.properties}></div>
          </div>
          <div className={Styles.education}>
            <div className={`${Styles.titleBar} ${Styles.resumeBgColor}`}>
              <h5>education</h5>
            </div>
            <div className={Styles.properties}></div>
          </div>
          <div className={Styles.extracurricular}>
            <div className={`${Styles.titleBar} ${Styles.resumeBgColor}`}>
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
