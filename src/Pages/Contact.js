import React, { useState,useEffect } from "react";
import Styles from "../Styles/contact.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Contactfill from "../actions/Contactfill";
import Resume1 from "./Resume1";
import { useSelector } from "react-redux";


function Contact() {

//const prevstate =useSelector((state) => state.conatct);
  const [contact, setContact] = useState({});
  
  const send = useDispatch();
  function handlechange(e) {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]:value
    });
    
  }
 
  useEffect(() =>{
    send(Contactfill(contact));

  },[contact])

  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Tell us about yourself</h1>
          <p>With this info, recruiters will be able to find you</p>
        </div>
        <form action="">
          <label>Name</label>
          <input value={contact.name} name="name" onChange={handlechange} type="text" autoFocus/>
          <label>Email</label>
          <div className={Styles.emailcontainer}>
            <div className={Styles.emailbox}>
              <input name="email" onChange={handlechange} type="email" />
            </div>
            <div className={Styles.emailcheck}>
              <input type="checkbox" />
              <label htmlFor="">Don't Show on my resume</label>
            </div>
          </div>

          <label>Street Address</label>
          <input name="street" onChange={handlechange} type="text" />
          <label>City</label>
          <input
            name="city"
            onChange={handlechange}
            type="text"
            className={Styles.city}
          />
          <label>Country</label>
          <input name="country" onChange={handlechange} type="text" />
          <label>Phone Number</label>
          <input
            name="phone"
            onChange={handlechange}
            type="text"
            className={Styles.phone}
          />
          <Link to="/experience">
            <button onClick={()=> send(Contactfill(contact))} className={Styles.btnSite}>SAVE & CONTINUE</button>
          </Link>
        </form>
        <div className={Styles.back}>
          <Link to="/howto">Back</Link>
        </div>
      </div>
      <div className={Styles.liveresume}>
      <Resume1 fontSize="10px"/>
      </div>
    </div>
  );
}

export default Contact;
