import React from 'react';
import { Link } from '@reach/router';

const Form = props => { 
    return (
        <div className="list">
            <h5>Leave a comment !</h5>
            <Link to="/">Create a new thread</Link>or click on one to leave a reply
        <ul id="list">
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
    }

export default Form;
