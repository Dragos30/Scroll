import React from 'react';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import './Portfolio.css';

const Portfolio = () => {
    return <div id="portfolio" className="transbox">
             <h1>Services</h1>
        <Fade left cascade>
            <h3>Finance and Audit</h3><br />
            <ul id="finance">
                <li>Internal controls: analysis of the main risks and proposal of internal controls necessary to mitigate the risk of losses</li>
                <li>Drafting and implementation of internal procedures</li>
                <li>Internal audit services - targeted engagements or/and consultancy for the set up of the internal audit function</li>
                <li>Special Investigations: fraud and corruption investigations, data analysis and reporting</li>
                <li>Review and agreed upon procedures engagements</li>
                <li>Personalised trainings for complex, specific or general IFRS understanding</li>
                <li>Review of financial statements for projects financed from public funds</li>
                <li>Finance aspects explained to non-finance professionals</li>
                <li>Other consultancy services.</li><br/>
           </ul>
                    <ul id="IT">
                        <h3>IT - Web development<br/></h3> 
                            <li>Professional websites</li>
                            <li>Search Engine Optimisation</li>
                            <li>Website Design & Re-design</li>
                            <li>Contact forms</li>
                            <li>Social media links</li>
                            <li>eCommerce & Online Shops</li>
                            <li>Professional photos</li>
                            <li>Mobile devices friendly</li>
                            <li>Cloud Hosting & Domain Services</li>
                            <li>Support & Help</li>
     </ul>
        </Fade>
    </div>

}
export default Portfolio;
