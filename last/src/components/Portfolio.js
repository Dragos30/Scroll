import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio__container">
                <div className="Portfolio__row row__1">
                    
                    <ScrollAnimation
                        animateIn="bounceInRight"
                        animateOut="fadeOut"
                        duration={0.5}
                        delay={0}
                    >
                        <div className="box box1" />
                    </ScrollAnimation>
                </div>

                <div className="Portfolio__row row__2">
                    <ScrollAnimation
                        animateIn="bounceInLeft"
                        animateOut="fadeOut"
                        duration={1.2}
                    >
                        <div className="box box2" />
                    </ScrollAnimation>
                </div>

                <div className="Portfolio__row row__3">
                    <ScrollAnimation
                        animateIn="bounceInLeft"
                        animateOut="fadeOut"
                        duration={0.8}
                    >
                        <div className="box box3" />
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}
