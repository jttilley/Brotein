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
            <p>Brotein is an one of the favorite workout app in the world</p>
            </div>
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
    };
  }

  export default AuthForm;