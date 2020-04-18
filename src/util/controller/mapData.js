import CONSTANTS from '../common.constants';
import axios from 'axios'

const fetchBasedOnLocationType = async (locationType, location) => {
    location = JSON.parse(location)
    switch (locationType) {
        case CONSTANTS.COUNTRY_BASED.id: {
            return  await fetchAllCountries()
        };
        case CONSTANTS.PROVINCE_BASED.id: {
            return await fetchAllProvincesByCountry(location.countryId);
        }
        case CONSTANTS.DISTRICT_BASED.id: return await fetchAllDistrictsByProvince(location.provinceId);
        case CONSTANTS.DS_DIVISION_BASED.id: return await fetchAllDistrictDivisionsByDistrict(location.districtId);
        case CONSTANTS.GN_DIVISION_BASED.id: return await fetchAllGramaNiladhariDivisionsByDistrictDivision(location.dnDivisionId);
        default:
            return null;
    }
}
const fetchAllCountries = async () => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_COUNTRY}/`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let countries = res.data.data;
                return countries;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchCountryById = async (countryId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_COUNTRY}/${countryId}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let country = res.data.data;
                return country;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchAllProvincesByCountry = async (countryId) => {

    console.log("COUNTRY ID ", countryId)
    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_COUNTRY}/${countryId}/${CONSTANTS.ROUTE_PROVINCE}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let provinces = res.data.data;
                return provinces;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchProvinceById = async (provinceId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_PROVINCE}/${provinceId}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let province = res.data.data;
                return province;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchAllDistrictsByProvince = async (provinceId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_PROVINCE}/${provinceId}/${CONSTANTS.ROUTE_DISTRICT}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let districts = res.data.data;
                console.log("PROVINCE ID "+provinceId);
                console.log("DISTRICT LIST "+JSON.stringify(districts))
                return districts;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchDistrictById = async (districtId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_DISTRICT}/${districtId}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let district = res.data.data;
                return district;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchAllDistrictDivisionsByDistrict = async (districtId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_DISTRICT}/${districtId}/${CONSTANTS.ROUTE_DNDIVISION}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let districtDivisions = res.data.data;
                return districtDivisions;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchDistrictDivisionById = async (districtDivisionId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_DNDIVISION}/${districtDivisionId}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let districtDivision = res.data.data;
                return districtDivision;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchAllGramaNiladhariDivisionsByDistrictDivision = async (districtDivisionId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_DNDIVISION}/${districtDivisionId}/${CONSTANTS.ROUTE_GNDIVISION}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let gndDivisions = res.data.data;
                return gndDivisions;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const fetchGramaNiladhariDivisionById = async (gnDivisionId) => {

    return await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.ROUTE_GNDIVISION}/${gnDivisionId}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let gndDivision = res.data.data;
                return gndDivision;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}
export default {
    fetchCountryById,
    fetchProvinceById,
    fetchDistrictById,
    fetchDistrictDivisionById,
    fetchGramaNiladhariDivisionById,
    fetchBasedOnLocationType
}