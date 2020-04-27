import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

class HeroComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="hero" class="clearfix">
                    <div class="container d-flex h-100">
                        <div class="row justify-content-center align-self-center">
                            <div class="col-md-6 intro-info order-md-first order-last">
                                <h2 className="white-text main-heading">#Stay Home</h2>
                                <h2 className="white-text main-heading">#Stay Safe</h2>
                                <div>
                                    <a href="/survey" className="btn-get-started scrollto">
                                        Lets fill the form
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6 intro-img order-md-last order-first">
                                <img src="img/intro-img.svg" alt="" class="img-fluid" />
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default HeroComponent;