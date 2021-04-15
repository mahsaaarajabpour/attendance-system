import React from "react";
import {NavLink} from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white header ">
            <a className="nav-logo" href="/">Timetable</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavDropdown"
                    aria-controls="myNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavDropdown">
                <div className="navbar-content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Sign Up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/record">Record Times</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/report">Reporting</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header