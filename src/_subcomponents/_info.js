import React from 'react';

class InfoComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="info" className="section md-padding bg-grey">

                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-header">
                                    <h2 className="title">Why Choose Us</h2>
                                </div>
                                <p>Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a scelerisque purus.</p>
                                <div className="feature">
                                    <i className="fa fa-check"></i>
                                    <p>Quis varius quam quisque id diam vel quam elementum.</p>
                                </div>
                                <div className="feature">
                                    <i className="fa fa-check"></i>
                                    <p>Mauris augue neque gravida in fermentum.</p>
                                </div>
                                <div className="feature">
                                    <i className="fa fa-check"></i>
                                    <p>Orci phasellus egestas tellus rutrum.</p>
                                </div>
                                <div className="feature">
                                    <i className="fa fa-check"></i>
                                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div id="about-slider" className="owl-carousel owl-theme">
                                    <img className="img-responsive" src="./img/about1.jpg" alt="" />
                                    <img className="img-responsive" src="./img/about2.jpg" alt="" />
                                    <img className="img-responsive" src="./img/about1.jpg" alt="" />
                                    <img className="img-responsive" src="./img/about2.jpg" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default InfoComponent;