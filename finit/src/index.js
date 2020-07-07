import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <About path="/" exact component={About} />
                <Portfolio path="/portfolio" exact component={Portfolio} />
                <Contact psth="/contact" exact component={Contact}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>

    , document.getElementById('root'));

