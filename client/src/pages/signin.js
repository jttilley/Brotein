import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    
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
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;