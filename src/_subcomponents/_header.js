import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import NavbarComponent from './_navbar';

class HeaderComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                   <NavbarComponent/>
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
            </React.Fragment>
        );
    }
}

export default HeaderComponent;