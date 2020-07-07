import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div id="about">
            <h1>About Us</h1>
            <Fade left cascade>
                <div className="about-container">
                    <p>FinIT Ltd was set up in 2019 as a company providing finance, audit and IT consultancy.<br/>Our assets:
                        a team of professionals with extensive knowledge and experience.<br />
            Tailored services.
                               Fair price for quality services.<br/>
                                   Flexibility in meeting the client needs.<br/></p>
                </div>
                </Fade>
           </div>
    )
}

export default About;