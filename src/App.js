import React from 'react';
import './App.css';

import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import HomeScreen from './views/home/home';
import QuestionForm from './views/surveys/_questionscreen';
import MainMapScreen from './views/map/mainMap';

const loading = () => {
	return (<div className="animated fadeIn pt-3 center text-center">...Loading</div>)
}

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route exact path={"/"} component={HomeScreen}/>
						<Route path="/survey" component={QuestionForm}/>
						<Route path="/map" component={MainMapScreen}/>
						<Route path="/home" component={HomeScreen}/>
					</Switch>
				</React.Suspense>
			</Router>

		);
	}
}

export default App;
