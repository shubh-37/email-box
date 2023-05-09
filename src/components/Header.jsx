import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    function getActiveStyle({ isActive } ) {
        return {
            textDecoration: "none",
            color: isActive ? "#7f1d1d" : "white",
            borderRight: isActive ? "4px solid blue" : "",
            backgroundColor: isActive ? "#a3a3a3" : "",
            borderRadius: isActive ? "0.5rem 0rem 0rem 0.5rem": "",
            margin: '0rem 2rem',
            fontSize: "1.2rem"
        }
    }
    return (
        <React.Fragment>
            <nav className="side-bar">
                <NavLink to="/" style={getActiveStyle} className="nav-link">Inbox</NavLink>
                <NavLink to="/spam" style={getActiveStyle} className="nav-link">Spam</NavLink>
                <NavLink to="/trash" style={getActiveStyle} className="nav-link">Trash</NavLink>
            </nav>
        </React.Fragment>
    )
}