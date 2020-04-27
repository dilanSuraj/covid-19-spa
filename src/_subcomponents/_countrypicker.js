import React, { useState, useEffect } from 'react';

import { fetchCountries } from '../api/statistics';

import { Select } from 'semantic-ui-react';

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (

        <select class="ui dropdown" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </select>

    );
};

export default CountryPicker;