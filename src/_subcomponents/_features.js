import React from 'react';

class FeaturesComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="features" class="features">
                    <div class="container">

                        <div class="row feature-item">
                            <div class="col-lg-6 wow fadeInUp">
                                <img src="img/features-1.svg" class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                                <h1>Corona Virus <strong style={{ color: "green" }}>Facts</strong></h1>
                                <p>
                                <i class="certificate icon" style={{ color: "green" }}></i> Washing hands and sneezing into elbows is the best practice
                               </p>
                                <p>
                                <i class="certificate icon"style={{ color: "green" }}></i>The panic and hysteria that's happening is fueled by racism and xenophobia,
                                    not evidence or practicality. nothing justifies being rude to others
                               </p>
                                <p>
                                <i class="certificate icon"style={{ color: "green" }}></i>Kindly check for references and look for evidence, not just believe the spreading news</p>                              
                            </div>
                        </div>

                        <div class="row feature-item mt-5 pt-5">
                            <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
                                <img src="img/features-2.svg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                                <h1>Corona Virus <strong style={{ color: "red" }}>Myths</strong></h1>
                                <p><i class="certificate icon" style={{ color: "red" }}></i>People with corona virus will absolutely die  </p>
                                <p><i class="certificate icon" style={{ color: "red" }}></i>To stay protected i need to buy a hazmut suit and a N95 mask</p>
                                <p><i class="certificate icon" style={{ color: "red" }}></i>I should believe everything new that came up </p>
                            </div>

                        </div>

                    </div>
                </section>
            </React.Fragment>)
    }
}

export default FeaturesComponent;