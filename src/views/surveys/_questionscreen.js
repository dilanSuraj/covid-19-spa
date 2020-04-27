import React from 'react';
import axios from "axios";

import CONSTANTS from '../../util/common.constants'
import { Row, Col, Card, CardBody as CardContent, FormGroup, Input, Label } from 'reactstrap';
import CheckboxScreen from './Questions/Checkbox';
import RadioButtonScreen from './Questions/RadioBtn';
import OtherPageNavBarComponent from '../../_subcomponents/_otherpagenavbar';
import FooterComponent from '../../_subcomponents/_footer';
import { Button, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import LocationQuestion from './Questions/Locations';
class QuestionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questionList: [],
            responseList: [],
            selectedtLocations: []
        }

    }

    prepareResponseList = (questionObjList) => {

        let responeList_ = [];
        for (let questionObj of questionObjList) {
            let responseObj = {
                questionId: "",
                questionName: "",
                type: questionObj.type,
                answer: [],
                value: [],
                useragent: "POSTMAN",
                ipAddress: "0.1.1.0"
            };
            responseObj.questionId = questionObj.questionId;
            responseObj.questionName = questionObj.name;
            responeList_.push(responseObj)
        }
        this.setState({
            responseList: responeList_
        });
    }

    handleLocations = (locationList) => {
        if (locationList !== null) {
            this.setState({
                selectedtLocations: locationList
            })
        }
    }

    handleOnChange = (questionId, answer, value) => {
        let index = 0;
        let list_ = this.state.responseList;
        for (let responseObj of list_) {
            if (responseObj.questionId === questionId) {
                list_[index].answer = answer;
                list_[index].value = value;

            }
            index++;
        }
        this.setState({
            responseList: list_
        })
    }

    handleCheckBoxList = (questionObj) => {
        let list_ = this.state.questionObjList;
        let index = 0;
        for (let questionObj_ of this.state.questionObjList) {
            if (questionObj.questionId === questionObj_.questionId) {
                list_[index] = questionObj;
                break;
            }
            index++;
        }
        this.setState({
            questionObjList: list_
        })
        return list_[index];
    }

    prepareCheckboxAnswerList = (answerList) => {
        let list_ = [];
        for (let option of answerList) {
            option.isChecked = false;
            list_.push(option)
        }
        return list_;
    }

    handleSubmitErrors = () => {
        console.log(this.state)
    }

    getQuestions = async () => {
        await axios.get(`${CONSTANTS.BCONIC_SURVEY_URI}${CONSTANTS.USER_API}${CONSTANTS.SURVEY_END_POINT}/${CONSTANTS.SURVEY_ID}/${CONSTANTS.QUESTION_END_POINT}`,
            {
                headers: CONSTANTS.HEADER_INFO
            }).then(async (res) => {
                try {

                    let questions = res.data.data;
                    let updatedQuestionList = []
                    for (let question of questions) {
                        if (question.type === CONSTANTS.questionTypes.CHECKBOX) {
                            if (!question.hasOwnProperty("optionList")) {
                                let optionList = this.prepareCheckboxAnswerList(question.questionAnswers);
                                question.optionList = optionList;
                            }
                        }
                        updatedQuestionList.push(question)
                    }
                    if (questions.length > 0) {
                        this.setState({
                            questionList: updatedQuestionList
                        })
                        await this.prepareResponseList(updatedQuestionList);
                    }
                } catch (error) {

                }

            }).catch((error) => {

            });

    }

    componentDidMount() {

        this.getQuestions();
    }


    render() {
        const { questionList, responseList } = this.state;
        return (

            <React.Fragment>
                <OtherPageNavBarComponent />
                <div className="bg-img-other-pages" style={{ color: "black", fontFamily:"Garamond", fontSize:"18px" }} >
                    <div>


                        <div style={{ paddingTop: "10%" }} />
                        {
                            (
                                questionList.length > 0
                                    ?
                                    (
                                        <Card style={{
                                            display: "flex",
                                            justifyContent: "center",

                                        }}>
                                            {
                                                (questionList.map((question, idx) => {

                                                    return (<Row key={idx} style={{ paddingTop: "2%" }}>
                                                        <Col xs="12">
                                                            <Card raised outline color="success">
                                                                <CardContent>

                                                                    <FormGroup row className="my-0">
                                                                        <Col xs="12">
                                                                            <FormGroup>
                                                                                <Label htmlFor="name" style={{ marginLeft: "5%" }} className="scrollto"><strong>Question :</strong>
                                                                                    {question.name}</Label>
                                                                            </FormGroup>

                                                                        </Col>
                                                                    </FormGroup>
                                                                    {
                                                                        (CONSTANTS.questionTypes.CHECKBOX === question.type)
                                                                            ?
                                                                            <FormGroup row className="my-0" style={{ marginLeft: "4%" }} >
                                                                                <CheckboxScreen
                                                                                    handleOnNext={this.handleOnNext}
                                                                                    questionPropObj={question}
                                                                                    responseList={responseList}
                                                                                    handleCheckBoxList={this.handleCheckBoxList}
                                                                                />
                                                                            </FormGroup>
                                                                            :
                                                                            (
                                                                                (CONSTANTS.questionTypes.RADIO_BUTTON === question.type)
                                                                                    ?
                                                                                    <FormGroup row className="my-0" style={{ marginLeft: "4%" }} >
                                                                                        <RadioButtonScreen
                                                                                            handleRadioChecked={this.handleOnChange}
                                                                                            responseList={responseList}
                                                                                            questionPropObj={question} />
                                                                                    </FormGroup>
                                                                                    :
                                                                                    <>
                                                                                        {
                                                                                            (CONSTANTS.questionTypes.LOCATION === question.type)
                                                                                                ?
                                                                                                <FormGroup row className="my-0" style={{ marginLeft: "4%" }} >
                                                                                                    <LocationQuestion
                                                                                                        handleLocations={this.handleLocations}
                                                                                                        responseList={responseList}
                                                                                                        questionPropObj={question} />
                                                                                                </FormGroup>
                                                                                                :
                                                                                                <FormGroup row className="my-0" style={{ marginLeft: "4%" }} >
                                                                                                    <Input type="textarea"
                                                                                                        id="questionLineText"
                                                                                                        placeholder="Enter your answer"
                                                                                                        required={question.required}
                                                                                                        questionPropObj={question}
                                                                                                        onChange={(e) => {
                                                                                                            e.preventDefault();
                                                                                                            this.handleOnChange(question.questionId, [e.target.value], [e.target.value])
                                                                                                        }}
                                                                                                    />
                                                                                                </FormGroup>
                                                                                        }
                                                                                    </>


                                                                            )
                                                                    }

                                                                </CardContent>
                                                            </Card>
                                                        </Col>
                                                    </Row>)
                                                }))
                                            }
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"

                                            >
                                                <Button variant="contained" color="secondary" style={{ fontSize: "100%", margin: "4%" }} onClick={() => this.handleSubmitErrors()}>
                                                    Submit Answers <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                                </Button>
                                            </Box>


                                        </Card>

                                    )
                                    :
                                    null
                            )
                        }
                    </div>
                </div>
                <footer>
                    <FooterComponent />
                </footer>
            </React.Fragment>
        );
    }

}

export default QuestionForm;