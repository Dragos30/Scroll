import React from 'react';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import './Contact.css';
import ReactContactForm from 'react-mail-form';

const Contact = () => {
    return (
        <div id="contact">
            <h1>Contact Us</h1>
                <h3>Hope to meet you soon!</h3>
            <Fade left cascade>
                <div className="contact-form">
                    <ReactContactForm to="dragosghita02@gmail.com" />
</div>
            </Fade>
        </div>

    );
}
export default Contact;


