import React from 'react';
import { fetchData } from '../api/statistics';
import ChartComponent from './charts';
import CountryPickerComponent from './_countrypicker';
import Info from './_statisticsCards';

class StatisticsComponent extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <React.Fragment>
                <section id="statistics" class="statistics">
                     
                    <Info data={data}/>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <CountryPickerComponent handleCountryChange={this.handleCountryChange} />
                    </div>
                    
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                       
                        <ChartComponent data={data} country={country} />
                    </div>

                </section>
            </React.Fragment >
        );
    }
}

export default StatisticsComponent;