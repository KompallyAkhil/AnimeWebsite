import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CSS from"./RegisterForm.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RegisterForm(){
    const [Data,FullData] = useState({
        username : '',
        email:'',
        password:'',
        confirmpassword:''
    });
    function Input(event){
        FullData({...Data,[event.target.name]:event.target.value})
    }
    function Register(event){
        let RegisteredData = {"Username":Data.username,"Password":Data.password,"EmailID":Data.email}
        fetch("http://localhost:8000/RegisterData",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(RegisteredData)
        })
        .then((res)=>{
            toast.success("Registered Successfully")
            
        })
        function Emailvalidate(email){
            var Keys = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email && email.match(Keys)) {
                return true;
            } else {
                return false;
            }
        }
        Emailvalidate()
        if(Data.username===''){
            toast.warning("Username is required")
            event.preventDefault()     
        }
        else if(Data.username.length<5){
            toast.error("Username is too short")
            event.preventDefault()
        }
        if(Data.email==='' || !Emailvalidate(Data.email)){
            toast.error("Please enter a valid Email address");
            event.preventDefault()
        }
        if(Data.password===''){
            toast.warning("Password cannot be empty")
            event.preventDefault()
        }
        else if(Data.password.length<7){
            toast.error("Password is too short")
            event.preventDefault()
        }
        if(Data.password!==Data.confirmpassword){
            toast.warn("Passwords don't match")
            event.preventDefault()
        }
        console.log(Data)
    }
    return(<>
    <div className={CSS.registercontainer}>
        <h2 className={CSS.heading}>Register Now</h2>
        <label>Username:</label>
        <input type="text" value={Data.username} name="username" autoFocus onChange={Input} required/>
        <label>Email:</label>
        <input type="text" value={Data.email} name="email" onChange={Input}required/>
        <label>Password:</label>
        <input type="password" value={Data.password} name="password" onChange={Input} required/>
        <label>Confirm Password:</label>
        <input type="password" value={Data.confirmpassword} name="confirmpassword" onChange={Input} required/>
        <div className="register">
            <Link to='/Login'><button className={CSS.button} onClick={Register}>Register</button></Link>
            <ToastContainer />
        </div>
    </div>
    </>)
}
export default RegisterForm;
