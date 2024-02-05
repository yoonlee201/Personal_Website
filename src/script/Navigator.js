import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/Navigator.css'

function Navigator() {
    return (
        <React.Fragment>
            <div className="NavBar">
                
                <NavButton id="home" button="YL" className="Menu link-to-home"/>
                <div className="MenuBar">
                    <NavButton className="Menu" id="about" button="about"/>
                    <NavButton className="Menu" id="timeline" button="experiences"/>
                    <NavButton className="Menu" id="contact" button="contact"/>
                    <Link className="Menu" to="/">CV</Link>
                    <Link className="Menu menu-logo"
                        target="_blank"
                        rel="noopener noreferrer"
                        to="https://www.linkedin.com/in/yoonje-lee-0573a4214/"
                    > <img className="logo linkedin"
                        src="/img/LI-In-Bug.png"
                        alt="Linkin logo" />
                    </Link>
                    <Link className="Menu menu-logo"
                        target="_blank"
                        rel="noopener noreferrer"
                        to="https://github.com/yoonlee201"
                    > <img className="logo"
                        src="/img/github-mark-white.svg"
                        alt="github logo" />
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

function NavButton(props){
    return (
        <div className={props.className}  onClick = {(e)=>{
                        e.preventDefault();
                        window.scrollTo({
                        top: document.querySelector(`#${props.id}`).offsetTop,
                        behavior: "smooth",
                        });}}>
            <span>{props.button}</span>
        </div>


    );
}

export default Navigator;
