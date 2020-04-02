import React, { Component, Suspense } from 'react';
import NavbarComponent from '../../_subcomponents/_navbar';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';
import HeaderComponent from '../../_subcomponents/_header';
import FooterComponent from '../../_subcomponents/_footer';
import HomeScreen from '../home/home';
import QuestionForm from './_questionscreen';

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
    console.log("DEFAULT");
  }

  render() {

    return (
      <div className="app">
        
          <Switch>
            <Route exact path="/home">
							<HomeScreen />
						</Route>
            <Route path="/survey">
							<QuestionForm />
						</Route>
            <Redirect from="/" to="/home" />
          </Switch>
        
      </div>
    );
  }
}

export default DefaultLayout;
