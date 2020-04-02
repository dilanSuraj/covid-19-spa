import React from 'react';
import QuestionForm from '../views/surveys/_questionscreen';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class OtherPageNavBarComponent extends React.Component {
    render() {
        return (
            <React.Fragment>        
                    <nav id="nav" className="navbar nav-transparent">
                        <div className="container">
                            <div className="navbar-header">
                                <div className="navbar-brand">
                                    <a href="index.html">
                                        <img className="logo" src="img/logo.png" alt="logo" />
                                        <img className="logo-alt" src="img/logo-alt.png" alt="logo" />
                                    </a>
                                </div>

                                <div className="nav-collapse">
                                    <span></span>
                                </div>
                            </div>

                            <ul className="main-nav nav navbar-nav navbar-right">
                                <li><Link to="/home">Home</Link></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#service">Services</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><Link to="/survey">Survey</Link></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>

                        </div>
                    </nav>
              
            </React.Fragment>
        );
    }
}

export default OtherPageNavBarComponent;