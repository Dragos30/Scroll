import React, { Component } from "react";
import Menu from "./Menu";

class MenuContainer extends Component {
    
    render() {
        return (
            <div className="ui container">
                <div>
                    <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
                </div>
                    <img id="me" src="Me2.png" alt="logo"></img>
                    <div class="animate__animated animate__bounce" id="part1">
                        <h1>My Work</h1>
                        <h2>Dragos Ghita-Front-end Web Developer</h2>
                    </div>
                    <div id="#part1">
                            <div className="ui grid">
                                <div className="row">
                                    <div className="four wide column">
                                        <img src="./pics/ui.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/css.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/focus.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/clean.jpg"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row">
                                    <div className="four wide column">
                                        <p>Experience in<strong> UI </strong>and <strong> UX </strong>design using Photoshop and
                                Illustrator.<br></br></p>
                                    </div>
                                    <div className="four wide column">
                                        <p>Talented in design patterns and passionate on coming with new innovative <strong>CSS</strong>
                                designs.<br></br><br></br></p>
                                    </div>
                                    <div className="four wide column">
                                        <p>Ability to produce quality work products with attention to detail<br></br></p>
                                    </div>
                                    <div className="four wide column">
                                        <p>The ability to write clean, maintainable code, using standard design patterns to good effect</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row">
                                    <div className="four wide column">
                                        <img src="./pics/jquery.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/frameworks.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/Cpanel.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/SSL.jpg"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row">
                                    <div className="four wide column">
                                        <p><strong>JAVASCRIPT</strong>- knowledge of JavaScript programming skills and libraries<br></br></p>
                                    </div>
                                    <div className="four wide column">
                                        <p>Knowledge of making user friendly websites using <strong>Bootstrap</strong> ,
                                <strong>Foundation</strong> and <b>Bulma</b> front-end frameworks<br></br></p>
                                    </div>
                                    <div className="four wide column">
                                        <p>Understanding of acquiring and using domain, hosting, cPanel<br></br></p>
                                    </div>
                                    <div className="four wide column">
                                        <p> Knowledge of <strong>SSL</strong> certification<br></br></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row">
                                    <div className="four wide column">
                                        <img src="./pics/windows.png"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/SEO.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/Motivation.jpg"></img>
                                    </div>
                                    <div className="four wide column">
                                        <img src="./pics/design fuels.png"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row">
                                    <div className="four wide column">
                                        <p>
                                            Vast experience in Windows systems
                            </p>
                                    </div>
                                    <div className="four wide column">
                                        <p>
                                            Knowledge and understanding of web servers, analytics and <strong>SEO.</strong>
                                        </p>
                                    </div>
                                    <div className="four wide column">
                                        <p>
                                            Highly self-motivated and adaptable to learning and understanding new technologies.
                            </p>
                                    </div>
                                    <div className="four wide column">
                                        <p>
                                            Understanding of great design fuels an excellent user experience.
                            </p>
                                    </div>
                                </div>
                            </div>
                            <div class="ui grid">
                                <div className="row">
                                    <div class="four wide column">
                                        <img src="./pics/english.jpg"></img>
                                    </div>
                                    <div class="four wide column">
                                        <img src="./pics/control.jpg"></img>
                                    </div>
                                    <div class="four wide column">
                                        <img src="./pics/efficient.jpg"></img>
                                    </div>
                                    <div class="four wide column">
                                        <img src="./pics/react.jpg"></img>
                                    </div>
                                </div>
                            </div>
                            <div class="ui grid">
                                <div className="row">
                                    <div class="four wide column">
                                        <p>Being able to read and write technical English, as well as being able to stand a professional English
                                conversation with customers, colleagues, and partners.</p>
                                    </div>
                                    <div class="four wide column">
                                        <p>Ability to exercise good judgment and discretionary skills in determining when to act independently
                                and when to consult management prior to taking action.</p>
                                    </div>
                                    <div class="four wide column">
                                        <p>Ability to create great, simple, clean, efficient code.</p>
                                    </div>
                                    <div class="four wide column">
                                        <p>Knowledge of <strong> React JS </strong>and <strong>Node JS</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div id="part2">
                    <h1>Portfolio</h1>
                    <h2>Here you have my projects representing my experience as a web developer and web designer:</h2>
                    <h3>Along the path of completing the <b>Modern React with Redux(2020 update)</b>Udemy course by <b>Stephen Grider</b> I have created multiple apps and
    I would like to present them to you.</h3>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                <h5>React image search app- sending an api request to unsplash, and retreaving the pictures requested.</h5> 
                                    <button className=" ui black button"><a href="https://github.com/Dragos30/React-image-seach" className="fa fa-github"><h4>src code</h4></a></button>
      </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="images search app.jpg" width="100%" alt="search"></img>
      </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>React sliding menu app</h5>
                                    <button className=" ui black button"><a href="https://github.com/Dragos30/React-sliding-menu" className="fa fa-github"><h4>src code</h4></a></button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="react sliding menu.jpg" width="100%" alt="slide"></img>
                            </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>React blog posts app</h5>
                                    <button className=" ui black button">
                                        <a href="https://github.com/Dragos30/React-blog-" className="fa fa-github"><h4>src code</h4></a>
                                    </button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="react app.jpg" width="100%" alt="app">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>React tasks list app-adding to do tasks an deleting on click with discret visual animations</h5>
                                    <button className=" ui black button">
                                        <a href="https://github.com/Dragos30/React-to-do-list" className="fa fa-github"><h4>src code</h4></a>
                                    </button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="tasks add app.jpg" width="100%" alt="add">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>React songs app- a list of songs with descriptions</h5>
                                    <button className=" ui black button">
                                        <a href="https://github.com/Dragos30/React-songs-app" className="fa fa-github"><h4>src code</h4></a>
                                    </button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="songs app.jpg" width="100%" alt="songs">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>React seasons app- identifing your IP location and showing your weather status winter/summer</h5>
                                    <button className=" ui black button">
                                        <a href="https://github.com/Dragos30/React-seasons-app" className="fa fa-github"><h4>src code</h4></a>
                                    </button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="seasons app.jpg" width="100%" alt="app">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                    <div className="left floated right aligned six wide column">
                        <div className="stackable four column grid">
                                    <h5>React videos app- sending an API request via ajax from react to youtube, displaying the requested videos and details</h5>
                                    <button className=" ui black button">
                                    <a href="https://github.com/Dragos30/React-videos-app" className="fa fa-github"><h4>src code</h4></a>
                                      </button>
                        </div>
                    </div>
                    <div className="right floated left aligned six wide column">
                        <div className="stackable four column grid">
                                <img src="videos app.jpg" width="100%" alt="videos">
                            </img>
                        </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>I present to you the redesign of my first e-commerce website. Framework: Bulma-modal, language: jQuery, fully responsive.</h5>
                                    <button className=" ui black button">
                                        <a href="https://github.com/Dragos30/ArtShop-Redesign-bulma-modal-implementation-" className="fa fa-github"><h4>src code</h4></a>
                                    </button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="screen1.jpg" width="100%" alt="e-commerce">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                    <h5>The "Skype" redesigned.The design is inspired after a picture on behance.</h5>
                                    <button className=" ui black button">
                                        <a href="https://github.com/Dragos30/Dragos30/Skype-redesigned" className="fa fa-github"><h4>src code</h4></a>
                                    </button>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img src="Skype 3.png" width="100%" alt="skype">
                                </img>
                            </div>
                        </div>
                        </div>
                        <div className="ui right aligned grid">
                            <div className="left floated right aligned six wide column">
                                <div className="stackable four column grid">
                                    <h5>This is my Finit LTD company website.</h5>
                                    <button className=" ui black button">
                                        <a href="www.finitdev.com"  class="fa fa-external-link"><h4>go to website</h4></a>
                                    </button>

                                </div>
                            </div>
                            <div className="right floated left aligned six wide column">
                                <div className="stackable four column grid">
                                    <img src="finitdev.jpg" width="100%" alt="finit">
                                    </img>
                                </div>
                            </div>
                        </div>
                </div>
                

                <div id="part3">
                    <br></br><h3>Hope to meet you soon!</h3>
                    <h3>Contact information</h3>
                    <p id="mail"><br></br><i className="fa fa-envelope">dragosghita02@gmail.com</i><br></br></p>
                        <br></br>
                            <div id="links">
                                <a id="link1" href="https://www.linkedin.com/in/dragos-ghita-006252173/" class="fa fa-linkedin" > </a>
                                <a id="link2" href="https://github.com/Dragos30"
                                    className="fa fa-github"></a>
                                <a id="link3" href="https://www.behance.net/ghitad"
                                    className="fa fa-behance"></a>
                                <a id="link4" href="https://codepen.io/Dragos2"
                                    className="fa fa-codepen"></a>
                            </div>
                </div>
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
                <footer className="footer">
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned six wide column">
                            <div className="stackable four column grid">
                                <p id="company"> Copyright &copy; 2020 Finit LTD.<br></br> All rights reserved. <br></br>Website by: FinIT LTD<br></br></p>

                            </div>
                        </div>
                        <div className="right floated left aligned six wide column">
                            <div className="stackable four column grid">
                                <img id="footer-image" src="f13.jpg" alt="" width="50%"></img>
                            </div>
                        </div>
                    </div>
                    </footer>
                
                </div>
        );
    }
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
 
    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }
   
}

export default MenuContainer;