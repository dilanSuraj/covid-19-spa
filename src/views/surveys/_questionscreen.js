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
class QuestionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questionList: [],
            responseList: [],
            checkedList: [],
        }

    }

    prepareResponseList = () => {

        let responeList_ = [];
        for (let questionObj of this.state.questionObjList) {
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

    handleOnChange = (questionId, answer, value) => {
        let index = 0;
        for (let responseObj of this.state.responseList) {
            if (responseObj.questionId === questionId) {
                this.state.responseList[index].answer = answer;
                this.state.responseList[index].value = value;
                this.forceUpdate();
            }
            index++;
        }
        index = 0;
    }

    setValue = (value) => {
        this.setState({
            score: value
        })
    }

    getValue = () => {
        let score_ = parseFloat(this.state.score)
        return Math.floor(score_)
    }

    handleCheckBoxList = (questionObj) => {
        let list_ = this.state.questionObjList;
        let index = 0;
        for (let questionObj_ of list_) {
            if (questionObj.questionId === questionObj_.questionId) {
                this.state.questionObjList[index] = questionObj;
                break;
            }
            index++;
        }
        return this.state.questionObjList[index];
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
        this.setState({
            isError: true
        })
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
                        await this.prepareResponseList();
                    }
                } catch (error) {

                }

            }).catch((error) => {

            });

    }

    // eligibleToNext = (questionObj) => {
    //     let isRequired = questionObj.required;
    //     let isEligible = true;
    //     let numOfChecked = 0;
    //     let questionId = questionObj.questionId;
    //     if (isRequired && questionObj.type != CONSTANTS.questionTypes.CHECKBOX) {
    //         for (let responseObj of this.props.responseList) {
    //             if (questionId === responseObj.questionId) {
    //                 if (responseObj.answer.length == 0) {
    //                     isEligible = false;
    //                     break;
    //                 }
    //             }
    //         }
    //     }

    //     else if (isRequired && questionObj.type === CONSTANTS.questionTypes.CHECKBOX) {
    //         for (let responseObj of this.props.responseList) {
    //             if (questionId === responseObj.questionId) {
    //                 for (let answerObj of responseObj.answer) {
    //                     if (answerObj.isChecked) {
    //                         numOfChecked++;
    //                     }
    //                 }
    //             }
    //         }
    //         if (numOfChecked == 0) {
    //             isEligible = false;
    //         }
    //     }
    //     return isEligible;
    // }

    componentDidMount() {

        this.getQuestions();
    }


    render() {
        const { questionList, responseList } = this.state;
        return (
            
            <React.Fragment>
                <body className="bg-img-other-pages" style={{ backgroundImage: "url('./img/surveybgimg.jpeg')", color: "white" }}>
                    <div>

                        <OtherPageNavBarComponent />
                        {
                            (
                                questionList.length > 0
                                    ?
                                    (
                                        <Card>
                                            {
                                                (questionList.map((question, idx) => {

                                                    return (<Row key={idx} style={{ paddingTop: "2%" }}>
                                                        <Col xs="12">
                                                            <Card >
                                                                <CardContent>

                                                                    <FormGroup row className="my-0">
                                                                        <Col xs="12">
                                                                            <FormGroup>
                                                                                <Label htmlFor="name" style={{ marginLeft: "5%" }} ><strong>Question :</strong>
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
                                                                                            handleOnNext={this.handleOnNext}
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
                                                <Button variant="contained" color="secondary" style={{ fontSize: "100%", margin:"4%" }}>
                                                 Submit Answers <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                               </Button>
                                            </Box>

                                            
                                        </Card>

                                    )
                                    :
                                    (
                                        <div>
                                            No Questions Found
                                        </div>
                                    )
                            )
                        }
                    </div>
                </body>
                <footer>
                    <FooterComponent />
                </footer>
            </React.Fragment>
        );
    }

}

export default QuestionForm;