import React from "react";
import ReactDOM from "react-dom";

import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./styles/animate.css";
import "./styles/styles.css";

function App() {
    return (
        <div className="App">
            <Homepage />
            <Portfolio />
            <Contact />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
