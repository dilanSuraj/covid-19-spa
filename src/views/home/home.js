import React, { Component, Suspense } from 'react';
import NavbarComponent from '../../_subcomponents/_navbar';
import FooterComponent from '../../_subcomponents/_footer';
import HeroComponent from '../../_subcomponents/_hero';
import CallToActionComponent from '../../_subcomponents/_callToAction';
import FeaturesComponent from '../../_subcomponents/_features';
import StatisticsComponent from '../../_subcomponents/_statistics';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <header id="home">
                    <NavbarComponent />
                    <HeroComponent/>
                </header>
                <FeaturesComponent/>
                <CallToActionComponent/>
                <StatisticsComponent/>
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
