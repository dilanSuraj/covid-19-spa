import React, { Component } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Checkbox } from '@material-ui/core';

class CheckboxScreen extends Component {

    state = {
        questionObj: {},
        optionList: []

    }

    handleChange = async (e) => {
        try {
            e.preventDefault();
            let index = 0;
            for (let option of this.state.optionList) {
                if (option.questionAnswerId === e.target.value) {

                    break;
                }
                index++;
            }
            this.state.optionList[index].isChecked = e.target.checked
            this.forceUpdate();
            this.props.questionPropObj.optionList[index].isChecked = e.target.checked;
            this.props.handleOnNext(this.props.questionPropObj.questionId, this.state.optionList, this.state.optionList)
            let obj = this.props.handleCheckBoxList(this.props.questionPropObj)
            this.setState({
                optionList: obj.questionAnswers
            })
            this.forceUpdate();
        } catch (error) {
            
        }

    }


    componentWillReceiveProps(props) {
        this.setState({
            questionObj: props.questionPropObj,
            optionList: props.questionPropObj.optionList
        })

    }

    componentDidMount() {
        this.setState({
            questionObj: this.props.questionPropObj,
            optionList: this.props.questionPropObj.optionList
        })
    }


    render() {
        const { optionList } = this.props.questionPropObj;
        return (
            <React.Fragment>
                <FormGroup onChange={this.handleChange} required={this.props.questionPropObj.required}>
                    {
                        optionList.map((item, key) => (
                            <div key={key}>
                                <Label >
                                    {key + 1}.<span /> <Checkbox name={item.name}
                                        checked={item.isChecked}
                                        key={item.questionAnswerId}
                                        value={item.questionAnswerId} />
                                    <span />
                                    {item.name}
                                </Label>
                                <br />
                            </div>
                        ))
                    }
                </FormGroup>
            </React.Fragment>
        );
    }
}

export default CheckboxScreen;