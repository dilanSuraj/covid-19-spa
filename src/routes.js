import React from 'react';

const HomeScreen = React.lazy(() => import('./views/home/home'));
const SurveyScreen = React.lazy(() => import('./views/surveys/_questionscreen'));


const routes = [
  { path: '/', exact: true, name: 'home' },
  { path: '/survey', exact: true,  name: 'Survey', component: SurveyScreen },
  { path: '/home', name: 'Home', component: HomeScreen },
  

];

export default routes;
