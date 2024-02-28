import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from"./Login.module.css";
import {useNavigate} from "react-router-dom"
function SignUp(){
  const navigate = useNavigate()
  const [Login, LoginData] = useState({
    LoginUsername: "",
    LoginPassword: ""
  });
  function logindata(event){
    LoginData({ ...Login, [event.target.name]: event.target.value });
  }
  function LoginEvent(event){
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
    fetch(`http://localhost:8000/RegisterData?Username=${Login.LoginUsername}`)
    .then((res) =>{
      return res.json()
    })
    .then((data) => {
      console.log(data)
      if (data.length === 0){
        toast.warn("Data not found or Please Register");
        event.preventDefault();
      }
      else{
        const user = data[0]
        console.log(user)
        if (user.Username === Login.LoginUsername){
          if (user.Password === Login.LoginPassword){
            toast.success("Logged in successfully");
            navigate('/anime')
          } 
          else{
            toast.warn("Wrong password");
            event.preventDefault()
            }
          }
          else{
            toast.warn("No data found");
            event.preventDefault();
            }
        }
    })
    .catch((err) => {
        toast.error("Error occured", err);
        event.preventDefault();
    });
  }
  return (
    <>
      <div className={styles.signupcontainer}>
        <h2 className={styles.heading}>User Login</h2>
        <label>Username:</label>
        <input type="text" value={Login.LoginUsername} name="LoginUsername" autoFocus onChange={logindata} required/>
        <label>Password:</label>
        <input type="password" id="password" value={Login.LoginPassword} name="LoginPassword" onChange={logindata} required />
        <div className={styles.butcontainer}>
        <button  className={styles.login} onClick={LoginEvent}>Login</button>
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
