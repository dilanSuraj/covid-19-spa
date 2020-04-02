import React, { Component, Suspense } from 'react';
import NavbarComponent from '../../_subcomponents/_navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import AboutusComponent from '../../_subcomponents/_aboutus';
import ServiceComponent from '../../_subcomponents/_services';
import ContactComponent from '../../_subcomponents/_contactus';
import FooterComponent from '../../_subcomponents/_footer';
import TeamComponent from '../../_subcomponents/_team';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
                <div>

                    <header id="home">
                        <NavbarComponent />
                        <div className="home-wrapper">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="home-content">
                                            <h1 className="white-text main-heading">#Stay Home</h1>
                                            <h1 className="white-text main-heading">#Stay Safe</h1>
                                            <p className="white-text">When the world is running down, you make the best of what's still around.</p>
                                            <button className="main-btn">
                                                Lets fill the form <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </header>

                    <AboutusComponent />

                    <ServiceComponent />

                    <TeamComponent />

                    <ContactComponent />

                    <FooterComponent />

                    <div id="back-to-top"></div>

                    <div id="preloader">
                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        );
    }
}

export default HomeScreen;
