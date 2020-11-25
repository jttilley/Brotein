import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AuthForm from './pages/auth';
import HomePage from './pages/home';
import HealthPage from './pages/health';
import NewMealPage from './pages/new-meal';
import NewWorkOutPage from './pages/new-workout';
import HistoryPage from './pages/history';
import SignInForm from './pages/signin';

class App extends Component {
  render() {
    return (

      <Router >

        <Route exact path="/" component={AuthForm} />
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/health" Component={HealthPage} />
        <Route exact path="/new-meal" component={NewMealPage} />
        <Route exact path="/new-workout" component={NewWorkOutPage} />
        <Route exact path="/history" component={HistoryPage} />

      </Router>
    );
  }
}



export default App;

