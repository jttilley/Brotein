import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/signup';
import SignInForm from './pages/signin';
//import './App.css';
//import HomePage from './pages/home';
import HomePage from './pages/Home';
import HealthPage from './pages/health';
import NewMealPage from './pages/new-meal';
import NewWorkOutPage from './pages/new-workout';
import HistoryPage from './pages/history';



class App extends Component {
  render() {
    return (

      <Router >

        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/health" Component={HealthPage} />
        <Route exact path="/new-meal" component={NewMealPage} />
        <Route exact path="/new-workout" component={NewWorkOutPage} />
        <Route exact path="/history" component={HistoryPage} />






      </Router>



    );
  }
}



export default App;

