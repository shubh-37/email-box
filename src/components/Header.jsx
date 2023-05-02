import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    function getActiveStyle({ isActive } ) {
        return {
            textDecoration: "none",
            color: isActive ? "red" : "gray",
            borderRight: isActive ? "4px solid blue" : "",
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