import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar(){
    function FirstUSer(event){
    let newuser = false
        event.preventDefault()
        toast.warn("Please Login")
        if(newuser===false){
            <Link to="/Login">Login</Link>
        }
        else{
            <Link to="/anime">Anime</Link>
        }
    }
    return(<>
    <nav>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link onClick={FirstUSer} to="/anime">Anime</Link>
                <ToastContainer />
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
        </ul>
    </nav>
    </>)
}
export default Navbar;