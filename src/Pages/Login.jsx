import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from"./Login.module.css";
function SignUp() {
  const [Login, LoginData] = useState({
    LoginUsername: "",
    LoginPassword: ""
  });

  function logindata(event) {
    LoginData({ ...Login, [event.target.name]: event.target.value });
  }
  function LoginEvent(event) {
    if(Login.LoginUsername === "" || Login.LoginUsername === null){
      toast.warn("Usename cannot be empty")
      event.preventDefault()
      return;
    }
    if(Login.LoginPassword === "" || Login.LoginPassword === null){ 
      event.preventDefault()
      toast.warning("Password cannot be empty")
      return;
    }    
  }
  return (
    <>
      <div className={styles.signupcontainer}>
        <h2 className={styles.heading}>User Login</h2>
        <label>Username:</label>
        <input type="text" value={Login.LoginUsername} name="LoginUsername" onChange={logindata} required/>
        <label>Password:</label>
        <input type="password" id="password" value={Login.LoginPassword} name="LoginPassword" onChange={logindata} required />
        <div className={styles.butcontainer}>
      <Link to="/anime">
        <button  className={styles.login} onClick={LoginEvent}>Login</button>
      </Link>
      <ToastContainer />
      <Link to="/RegisterForm">
        <button className={styles.newuser}>Sign Up</button>
      </Link>
    
    </div>
      </div>
    </>
  );
}

export default SignUp;
