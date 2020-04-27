import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';
import { RadioGroup, Radio, TextField } from '@material-ui/core';
import CONSTANTS from '../../../util/common.constants'
import mapDataController from '../../../util/controller/mapData'

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

    handleChange = async (e, locationId) => {
        try {
            e.preventDefault();
            let isAcknowledged_ = this.state.isAcknowledged;
            isAcknowledged_.set(locationId, e.target.value)
            let selectedAnswerListTmp = this.state.selectedAnswerList;
            let selectedLocationTmp = selectedAnswerListTmp.get(locationId);
            selectedLocationTmp.isAcknowledged = e.target.value;
            selectedAnswerListTmp.set(locationId, selectedLocationTmp);
            this.handleLocations(selectedAnswerListTmp);
            this.setState({
                selectedAnswerList: selectedAnswerListTmp,
                isAcknowledged: isAcknowledged_
            })
        } catch (error) {
        }

    }

    handleLocations = (selectedLocations) => {
        this.props.handleLocations(selectedLocations);
    }

    onSelect = async (location, locationType) => {
        let locationIndex = this.state.locationTypeList.indexOf(locationType.id)
        let selectedAnswerListTmp = this.state.selectedAnswerList;
        let selectedLocationTmp = selectedAnswerListTmp.get(locationType.id);
        selectedLocationTmp.location = location;
        selectedAnswerListTmp.set(locationType.id, selectedLocationTmp);
        this.setState({
            selectedAnswerList: selectedAnswerListTmp
        })
        this.handleLocations(selectedAnswerListTmp);
        await this.getLocationBasedOnType(this.state.locationTypeList[locationIndex + 1], location);
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
            let locationListTmp = this.state.locationList;
            locationListTmp.set(locationType, list);
            this.setState({
                locationList: locationListTmp
            })
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
            selectedAnswerList.set(locationType.id, {
                location: '',
                isAcknowledged: "false"
            })
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
                <div class="ui cards">
                {
                    locationSequence.map((location, key) => (
                        (locationTypeList.includes(location.id)) ?
                            <a class="red card" key={key} style={{
                                padding:"5%",
                                
                            }}>

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
                                        <div >
                                            <Input type="select" name="select" id="select" onChange={(e) => {
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

                            </a>
                            :
                            null

                    ))
                }
                </div>
            </React.Fragment>
        );
    }
}

export default LocationQuestion;