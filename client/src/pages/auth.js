import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './signup';
import SignInForm from './signin';
import UserContext from '../utils/UserContext'; 
// import App from '../App'; 

const AuthForm = () => {
    
    // let [state, setState] = useState ({ 
    //   username: "",
    //   password: ""
    // });
    
      return (
         <Router>
          <div className="App">
            <form className="App__Aside">

            <h1>Welcome to Brotein</h1>
            <br></br>
            <h3>"It's never too early or late to work towards being the healthiest you." </h3>
            <br></br>
            <h4>We believe that when our bodies are in good working order and are healthy every aspect of our life feels the benefit - we feel and look good! Having good health contributes greatly to a better and happier life. At Brotien, we are here to help you and your health journey. Whether you are just getting started or you're a seasoned vet, this app is meant for you!</h4>
            </form>
            <br></br>
            <div className="App__Form">
              <div className="PageSwitcher">
                  <NavLink to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                </div>

                <Route exact path="/" component={SignInForm}>
                </Route>
                <Route path="/signup" component={SignUpForm}>
                </Route>
            </div>
          </div>
        </Router>
      );
  }

  export default AuthForm;