import React from 'react';
import './App.css';

import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, HashRouter } from 'react-router-dom';
import DefaultLayout from './views/surveys/defaultLayout';
import QuestionForm from './views/surveys/_questionscreen';

const loading = () => {
	return (<div className="animated fadeIn pt-3 center text-center">...Loading</div>)
}

class App extends React.Component {

	render() {
		return (
			<Router>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route path="/">
							<DefaultLayout />
						</Route>
						
						{/* <Route exact path="/" name="Home" render={props => <DefaultLayout {...props} />} />
						<Route path="/survey" name="Survey" render={props => {
							console.log("HERE")
							return (<QuestionForm {...props} />);
						}} /> */}
					</Switch>
				</React.Suspense>
			</Router>

		);
	}
}

export default App;
