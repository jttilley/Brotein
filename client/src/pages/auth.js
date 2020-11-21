import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './signup';
import SignInForm from './signin';

class AuthForm extends Component {
    
    state = {
      email: "",
      password: ""
    };
  
    handleChange = event => {
      let { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      // auth
      //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
      //   .then(user => {
      //     // make call to the server sending in that unique id from firebase
      //     this.setState({
      //       toForm: true
      //     });
      //   })
        // .catch(error => console.log(error));
    };

    render() {
      return (
        <Router>
          <div className="App">
            <div className="App__Aside">Welcome to Brotein
            <p>Brotein is an one of the favorite workout app in the wold</p>
            </div>
            <div className="App__Form">
              <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                <Route exact path="/" component={SignUpForm}>
                </Route>
                <Route path="/sign-in" component={SignInForm}>
                </Route>
            </div>

          </div>
        </Router>
      );
    };
  }

  export default AuthForm;