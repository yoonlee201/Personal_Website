import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/Navigator.css'

function Navigator() {

    return (

        <React.Fragment>
            <div className="NavBar">
                <Link className="Menu link-to-home" to="/">YL</Link>
                <div className="MenuBar">
                    <Link className="Menu" to="/">about</Link>
                    <Link className="Menu" to="/">experiences</Link>
                    <Link className="Menu" to="/">portfolio</Link>
                    <Link className="Menu" to="/">contact</Link>
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

export default Navigator;
