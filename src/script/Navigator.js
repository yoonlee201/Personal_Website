import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/Navigator.css'

function Navigator() {
    return (
        <React.Fragment>
            <div className="NavBar">
                <div className="MenuBar">
                    <NavButton className="Menu" id="home" button="home"/>
                    <NavButton className="Menu" id="experiences" button="projects"/>
                    <NavButton className="Menu" id="skills" button="skills"/>
                    <NavButton className="Menu" id="experiences" button="experiences"/>
                    <NavButton className="Menu" id="education" button="education"/>
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
