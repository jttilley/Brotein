import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './signup';
import SignInForm from './signin';

class AuthForm extends Component {
    
    state = {
      username: "",
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
            <form className="App__Aside">

            <h1>Welcome to Brotein</h1>
            <br></br>
            <h3>"It's never too early or late to work towards being the healthiest you." </h3>
            <br></br>
<<<<<<< HEAD
            <p>We believe that when our bodies are in good working order, and are healthy - every aspect of our life feels the benefit - We feel good and look good. Having good health contributes greatly to a better and happier life. At Brotien, we are here to help you and your health journey. Whether you are just getting started, or your a seasoned vet this app is meant for you.</p>
=======
            <p>We believe that when our bodies are in good working order and are healthy every aspect of our life feels the benefit - we feel and look good! Having good health contributes greatly to a better and happier life. At Brotien, we are here to help you and your health journey. Whether you are just getting started or you're a seasoned vet, this app is meant for you!</p>
>>>>>>> d238c58d4ae3381ea287012d9b817646a94c0d19
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
    };
  }

  export default AuthForm;