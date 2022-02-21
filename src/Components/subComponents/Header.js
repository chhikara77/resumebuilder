import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/header.module.css';
import logo from "../../images/logo.png";

export default function Header() {
    return (
        <>
            <div className={styles.logo}>
                <Link to="/">
           <img src={logo} alt="" />
        
                </Link>
            </div>
            <div className={styles.contents}>
                <div>
                    Resume Templates
                </div>
                <div>
                    About Us
                </div>
                <div className={styles.signupbtn}>
                    <Link to='/signup' style={{ textDecoration: "none" }}>
                        Register
                    </Link>
                </div>
                <div className={styles.loginbtn}>
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        Login
                    </Link>
                </div>
            </div>
        </>
    )
}
