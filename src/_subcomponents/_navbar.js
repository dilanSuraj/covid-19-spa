import React from 'react';

class NavbarComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <div className="bg-img" style={{ backgroundImage: "url('./img/background1.jpg')" }}>
                        <div className="overlay"></div>
                    </div>
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
                                <li><a href="/home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#service">Services</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="/survey">Survey</a></li>
                                <li><a href="/map">Heat Map</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>

                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
 
export default NavbarComponent;