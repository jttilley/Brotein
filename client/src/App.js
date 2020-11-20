import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/signup';
import SignInForm from './pages/signin';
//import './App.css';
//import HomePage from './pages/home';
import HomePage from './pages/Home';



class App extends Component {
  render() {
    return (

      <Router >

        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/Home" component={HomePage} />
        <Route path="/sign-in" component={SignInForm} />





      </Router>



    );
  }
}



export default App;

