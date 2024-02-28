import React from "react";
import css from "./About.module.css";
import { Link } from "react-router-dom";
function About(){
    return(
        <>
        <div className={css.bg}></div>
        <div className={css.aboutcontainer}>
            <p className={css.heading}>🌟 Watch Anime Online</p>
            <p>Get ready for a rollercoaster of emotions as we bring you insightful reviews, exciting recommendations, and the latest news from the anime universe. Whether you're a seasoned otaku or just stepping into this fantastic world, our blog is your go-to destination for immersive content.</p>
            <div className={css.centre}>
            <h4>100% Entertainment</h4>
            <Link to="/Login"><button className={css.about}>Get Started</button></Link>
            </div>
        </div>
        </>
    )
}
export default About;
