const BCONIC_SURVEY_URI = 'http://16048eef.ngrok.io/';
const USER_API = 'api/';
const AUTH_API = 'auth/';
const SURVEY_END_POINT = 'surveys';
const ANSWER_END_POINT = 'answers';
const SUMMARY_END_POINT = 'summarries';
const QUESTION_END_POINT = 'questions';
const SURVEY_ID = "23670316-bd02-4b9a-8afd-7a56ab164808";

const questionTypes = {
    CHECKBOX : "CHECKBOX",
    LINE_TEXT:  "LINE TEXT",
    RADIO_BUTTON:  "RADIO BUTTON"
}
const HEADER_INFO = {
    "Content-Type":"application/json"
}

module.exports = {
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