import React from 'react';
import { Icon } from 'semantic-ui-react';

class NavbarComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="header">

                    <div id="topbar">
                        <div class="container">
                            <div class="social-links">
                                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="container">

                        <div class="logo float-left">
                            <h1 class="text-light"><a href="#intro" class="scrollto"><span>COVID-19</span></a></h1>
                        </div>

                        <nav class="main-nav float-right d-none d-lg-block">
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="#statistics">Current Statistics</a></li>
                                <li><a href="#features">Facts and Myths</a></li>
                                <li><a href="/survey" >
                                    <sup>
                                        <h2 style={{ color: "red", fontWeight: "bolder" }}>
                                            <sup>
                                                <Icon name="circle" />
                                            </sup>
                                    Survey
                                    </h2>
                                    </sup>
                                </a>
                                </li>
                                <li><a href="/map">Heat Map</a></li>
                                <li><a href="#call-to-action">Emergency Call</a></li>
                            </ul>

                        </nav>
                    </div>
                </header>

            </React.Fragment>
        );
    }
}

export default NavbarComponent;