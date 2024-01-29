import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/Navigator.css'

function Navigator() {

    return (

        <React.Fragment>
            <div className="MenuBar">
                <Link className="Menu" to="/"> Home </Link>
                <Link className="Menu" to="/"> about </Link>
                <Link className="Menu" to="/"> experiences </Link>
                <Link className="Menu" to="/"> portfolio </Link>
                <Link className="Menu" to="/"> contact </Link>
                <Link className="Menu"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://www.linkedin.com/in/yoonje-lee-0573a4214/"
                > linkedin </Link>
                <Link className="Menu"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://www.linkedin.com/in/yoonje-lee-0573a4214/"
                      > github </Link>
            </div>
        </React.Fragment>
    );
}

export default Navigator;
