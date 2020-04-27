import React from 'react';

class OtherPageNavBarComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="header">

                    <div id="topbar">
                        <div className="container">
                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div className="logo float-left">
                            <h1 className="text-light"><a href="/" className="scrollto"><span>COVID-19</span></a></h1>
                        </div>

                        <nav className="main-nav float-right d-none d-lg-block">
                            <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/survey">Survey</a></li>
                            </ul>

                        </nav>
                    </div>
                </header>
          </React.Fragment>
        );
    }
}

export default OtherPageNavBarComponent;