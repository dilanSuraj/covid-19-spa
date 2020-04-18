import React, { Component } from 'react';
import { Label, Dropdown, DropdownItem, DropdownMenu, Input } from 'reactstrap';
import { RadioGroup, Radio, TextField } from '@material-ui/core';
import CONSTANTS from '../../../util/common.constants'
import mapDataController from '../../../util/controller/mapData'
import { Autocomplete } from '@material-ui/lab'
import Select from 'react-select';
class LocationQuestion extends Component {

    state = {
        questionObj: {},
        checkedAnswer: [],
        optionList: [],
        isLocationChanged: false,
        locationTypeList: [],
        locationList: new Map(),
        isAcknowledged: new Map(),
        selectedAnswerList: new Map()
    }

    handleChange = async (e, locationType) => {
        try {
            e.preventDefault();
            this.state.isAcknowledged.set(locationType, e.target.value)
            // this.forceUpdate()
            this.isComponentNeedToUpdate();

        } catch (error) {
            console.log("Error occurred")
        }

    }

    isComponentNeedToUpdate = () => {
        let prevStatOnChnaged = this.state.isLocationChanged
        this.setState({
            isLocationChanged: !prevStatOnChnaged
        })
    }

    onSelect = async (option, locationType) => {
        let locationIndex = this.state.locationTypeList.indexOf(locationType.id)
        this.state.selectedAnswerList.set(locationType.id, option);
        await this.getLocationBasedOnType(this.state.locationTypeList[locationIndex + 1], option);
    }


    componentWillReceiveProps(props) {
        this.setState({
            questionObj: props.questionPropObj,
            optionList: props.responseList
        })
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

    getLocationBasedOnType = async (locationType, option) => {
        let list = await mapDataController.fetchBasedOnLocationType(locationType, option);
        if (list !== null) {
            this.state.locationList.set(locationType, list)
            console.log(locationType)
            console.log(option)
            console.log(this.state.locationList.get(locationType))
            console.log(JSON.stringify(list))
        }
    }
    getlocationTypeList = () => {
        let locationTypeList_ = [];
        const questionAnswers = this.props.questionPropObj.questionAnswers;
        for (let questionAnswer of questionAnswers) {
            if (questionAnswer.hasOwnProperty("value")) {
                locationTypeList_.push(questionAnswer.value)
            }
        }
        this.setState({
            locationTypeList: locationTypeList_
        })
    }

    initializeAcknowledgeList = () => {
        let mapList = new Map();
        let locationMapList = new Map();
        let selectedAnswerList = new Map();

        for (let locationType of CONSTANTS.LOCATION_SEQUENCE) {
            mapList.set(locationType.id, "false")
            locationMapList.set(locationType.id, [])
            selectedAnswerList.set(locationType.id, '')
        }
        this.setState({
            isAcknowledged: mapList,
            locationList: locationMapList,
            selectedAnswerList: selectedAnswerList
        })

    }

    async componentDidMount() {
        this.setState({
            questionObj: this.props.questionPropObj,
            optionList: this.props.responseList
        })
        await this.getCheckedAnswer(this.props.questionPropObj.questionId)
        await this.getlocationTypeList();
        await this.initializeAcknowledgeList();
        await this.getLocationBasedOnType(CONSTANTS.COUNTRY_BASED.id, null)
    }

    shouldComponentUpdate(nextProps) {
        const locationChanged = this.state.isLocationChanged !== nextProps.isLocationChanged;
        return locationChanged;
    }


    render() {
        const { locationTypeList } = this.state;
        const locationSequence = CONSTANTS.LOCATION_SEQUENCE;
        return (
            <React.Fragment>
                {
                    locationSequence.map((location, key) => (
                        (locationTypeList.includes(location.id)) ?
                            <div key={key}>

                                <Label>
                                    Based on {location.name} ?
                                 </Label>
                                <RadioGroup >
                                    <Label>
                                        <span />
                                        <Radio name={location.id} value={true} checked={this.state.isAcknowledged.get(location.id) === "true"} onChange={
                                            (e) => {

                                                this.handleChange(e, location.id)
                                            }} />
                                        <span />
                                        Yes
                                    </Label>
                                    <Label>
                                        <span />
                                        <Radio name={location.id} value={false} checked={this.state.isAcknowledged.get(location.id) === "false"} onChange={
                                            (e) => {
                                                this.handleChange(e, location.id)
                                            }} />
                                        <span />
                                        No
                                    </Label>

                                </RadioGroup>

                                {
                                    (this.state.isAcknowledged.get(location.id) === "true")
                                        ?
                                        <div style={{width:"25%"}}>
                                            <Input type="select" name="select" id="select"  onChange={(e) => {
                                                this.onSelect(e.target.value, location)
                                            }} >                                                                         
                                                {
                                                    this.state.locationList.get(location.id).map((location_, key) => {
                                                        return <option key={key} value={JSON.stringify(location_)}>{location_.name}</option>
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        :
                                        null
                                }

                            </div>
                            :
                            null

                    ))
                }
            </React.Fragment>
        );
    }
}

export default LocationQuestion;