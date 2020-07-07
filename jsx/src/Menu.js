import React, { Component } from "react";
import "./Menu.css"

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div className="ui secondary menu">
                    <a className="active item" href="#part1">Story</a>
                    <a className="item" href="#part2">Projects</a>
                    <a className="item" href="#part3">Contact</a>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i aria-hidden="true" className="search icon"></i>
                            </div>
                        </div>
                        <a className="item" href="#">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;