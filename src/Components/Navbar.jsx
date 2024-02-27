import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.module.css";
function Navbar(){
    return(<>
    <nav>
        <ul>
        
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/anime">Anime</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
        </ul>
    </nav>
    </>)
}
export default Navbar;