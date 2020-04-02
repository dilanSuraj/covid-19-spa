import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { RadioGroup, Radio } from '@material-ui/core';

class RadioButton extends Component {

    state = {
        questionObj: {},
        checkedAnswer: '',
        optionList: []
    }

    handleChange = (e) => {
        try {
            e.preventDefault();
            let index = 0;
            this.setState({
                checkedAnswer: e.target.value
            })
            this.props.handleOnNext(this.props.questionPropObj.questionId, [e.target.value], [e.target.name])
        } catch (error) {
            // this.props.handleSubmitErrors();
        }

    }


    componentWillReceiveProps(props) {
        this.setState({
            questionObj: props.questionPropObj,
            optionList: props.responseList
        })
        this.getCheckedAnswer(props.questionPropObj.questionId)
    }

    getCheckedAnswer = (questionId) => {
        for (let response of this.props.responseList) {
            if (response.questionId === questionId) {
                let answer = response.answer[0];
                if (response !== null) {
                    this.setState({
                        checkedAnswer: answer
                    })
                }

            }
        }
    }

    componentDidMount() {
        this.setState({
            questionObj: this.props.questionPropObj,
            optionList: this.props.responseList
        })

        this.getCheckedAnswer(this.props.questionPropObj.questionId)
        // if (!this.props.getErrors()) {
        //     this.setState({
        //         questionObj: this.props.questionPropObj,
        //         optionList: this.props.responseList
        //     })

        //     this.getCheckedAnswer(this.props.questionPropObj.questionId)
        // }
        // else {
        //     // this.props.moveToFinalScreen();
        // }
        this.setState({
            questionObj: this.props.questionPropObj,
            optionList: this.props.responseList
        })

    }

    render() {
        const { questionAnswers } = this.props.questionPropObj;
        const { checkedAnswer } = this.state;
        return (
            <React.Fragment>
                <RadioGroup onChange={this.handleChange} >
                    {
                        questionAnswers.map((item, key) => (
                            (item.questionAnswerId === checkedAnswer) ?
                                <Label key={item.questionAnswerId}>
                                    {key + 1}.<span />
                                    <Radio name={item.name} required={this.props.questionPropObj.required}
                                        checked={true}
                                        key={item.questionAnswerId}
                                        value={item.questionAnswerId} />
                                    <span />
                                    {item.name}
                                </Label>
                                :
                                <Label key={item.questionAnswerId}>
                                    {key + 1}.<span />
                                    <Radio name={item.name} required={this.props.questionPropObj.required}
                                        checked={false}
                                        key={item.questionAnswerId}
                                        value={item.questionAnswerId} />
                                    <span />
                                    {item.name}
                                </Label>

                        ))
                    }
                </RadioGroup>
            </React.Fragment>
        );
    }
}

export default RadioButton;