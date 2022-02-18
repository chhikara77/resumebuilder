import React from "react";
import Styles from "../Styles/finalize.module.css";
import { Link } from "react-router-dom";

function Finalize() {
  return (
    <div className={Styles.containerbox}>
      <div className={Styles.left}>
        <div className={Styles.resumebox}></div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.firstbox}></div>
        <div className={Styles.secondbox}></div>
        <div className={Styles.thirdbox}></div>
      </div>
    </div>
  );
}

export default Finalize;
