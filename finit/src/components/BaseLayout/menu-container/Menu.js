import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <ul id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>     
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/">About</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/portfolio">Services</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/contact">Contact</NavLink></p>
            </ul>
        );
    }
}

export default Menu;