import React from 'react';

class CallToActionComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="call-to-action" class="call-to-action wow fadeInUp">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 text-center text-lg-left">
                                <h3 class="cta-title">Call Now</h3>
                                <p class="cta-text"> Call the hot lines and explain your circumstances and any possible symptoms, obtain
                                advice on what you should do and follow the directions you recieve </p>
                            </div>
                            <div class="col-lg-3 cta-btn-container text-center">
                                <a class="cta-btn align-middle" href="#">117 or 199</a>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>)
    }
}

export default CallToActionComponent;