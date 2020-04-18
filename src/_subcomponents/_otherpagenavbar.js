import React from 'react';

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/survey">Survey</a></li>
                        </ul>

                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default OtherPageNavBarComponent;