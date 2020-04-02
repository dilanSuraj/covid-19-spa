import CONSTANTS from '../common.constants';
import axios from 'axios'

const getAllSurveyQuestions = async () => {

    await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.AUTH_API}${CONSTANTS.SURVEY_END_POINT}/${CONSTANTS.SURVEY_ID}/${CONSTANTS.QUESTION_END_POINT}`,
        {
            headers: CONSTANTS.HEADER_INFO
        }).then(res => {
            try {
                let questions = res.data.data;
                return questions;
            } catch (error) {
                console.log(JSON.stringify(error))
                return null;
            }
        })
}

const submitAnswers = async (answerList) => {
    await axios.post(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.AUTH_API}${CONSTANTS.ANSWER_END_POINT}/${CONSTANTS.SURVEY_ID}`,
        answerList,
        {
            headers: commonConstants.HEADER_INFO
        }).then(res => {
            return res.data.data;
        }).catch(error => {
            console.log(error.message)
            return 0;
        });
}

export default {
    getAllSurveyQuestions,
    submitAnswers
}