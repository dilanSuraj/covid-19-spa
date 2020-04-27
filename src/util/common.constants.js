const BCONIC_SURVEY_URI = 'http://12944887.ngrok.io/';
const USER_API = 'api/';
const AUTH_API = 'auth/';
const SURVEY_END_POINT = 'surveys';
const ANSWER_END_POINT = 'answers';
const SUMMARY_END_POINT = 'summarries';
const QUESTION_END_POINT = 'questions';
const SURVEY_ID = "23670316-bd02-4b9a-8afd-7a56ab164808";
const MAPDATA_URI = "'http://s3-us-west-2.amazonaws.com/worldbank-srilanka/";

const questionTypes = {
    CHECKBOX : "CHECKBOX",
    LINE_TEXT:  "LINE TEXT",
    RADIO_BUTTON:  "RADIO BUTTON",
    LOCATION : "LOCATION"
}
const ROUTE_COUNTRY = "country";
const ROUTE_PROVINCE = "provinces";
const ROUTE_DISTRICT = "districts";
const ROUTE_DNDIVISION = "dndivisions";
const ROUTE_GNDIVISION = "gndivisions";


const COUNTRY_BASED = {
    id:"COUNTRY BASED",
    name:"Country"
};
const PROVINCE_BASED = {
    id:"PROVINCE BASED",
    name:"Province"
};
const DISTRICT_BASED = {
    id:"DISTRICT BASED",
    name:"District"
};
const DS_DIVISION_BASED = {
    id:"DISTRICT SECRETARIAL DIVISION BASED",
    name:"District Divsisonal Secretarial"
};
const GN_DIVISION_BASED = {
    id:"GRAMA NILADHARI DIVISION BASED",
    name:"Grama Niladhari Division"
};

const LOCATION_SEQUENCE = [COUNTRY_BASED,PROVINCE_BASED,DISTRICT_BASED, DS_DIVISION_BASED, GN_DIVISION_BASED]
const HEADER_INFO = {
    "Content-Type":"application/json"
}

module.exports = {
    MAPDATA_URI,
    LOCATION_SEQUENCE,
    ROUTE_COUNTRY,
    ROUTE_PROVINCE,
    ROUTE_DISTRICT,
    ROUTE_DNDIVISION,
    ROUTE_GNDIVISION,
    COUNTRY_BASED,
    PROVINCE_BASED,
    DISTRICT_BASED,
    DS_DIVISION_BASED,
    GN_DIVISION_BASED,
    BCONIC_SURVEY_URI,
    USER_API,
    AUTH_API,
    SURVEY_END_POINT,
    ANSWER_END_POINT,
    SUMMARY_END_POINT,
    QUESTION_END_POINT,
    HEADER_INFO,
    SURVEY_ID,
    questionTypes,
}