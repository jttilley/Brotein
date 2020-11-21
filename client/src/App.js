import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AuthForm from './pages/auth';
<<<<<<< HEAD
//import './App.css';
//import HomePage from './pages/home';
import HomePage from './pages/Home';
=======
import HomePage from './pages/home';
>>>>>>> 078b14de124c111c389118bafd8c5916fa378f20
import HealthPage from './pages/health';
import NewMealPage from './pages/new-meal';
import NewWorkOutPage from './pages/new-workout';
import HistoryPage from './pages/history';

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

