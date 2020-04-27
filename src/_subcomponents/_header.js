import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import NavbarComponent from './_navbar';

class HeaderComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <NavbarComponent />
                    <section id="hero" class="clearfix">
                        <div class="container d-flex h-100">
                            <div class="row justify-content-center align-self-center">
                                <div class="col-md-6 intro-info order-md-first order-last">
                                    <h2>Rapid Solutions<br />for Your <span>Business!</span></h2>
                                    <div>
                                        <a href="#about" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>

                                <div class="col-md-6 intro-img order-md-last order-first">
                                    <img src="img/intro-img.svg" alt="" class="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </section>
                    {/* <div className="home-wrapper">
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
                    </div> */}

                </header>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;