import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import UserContext from '../utils/UserContext'; 

const SignUpForm = () => {
  const {handleInputChange, handleSignup, userData} = useContext (UserContext); 

  return (
    <div className="FormCenter">
    <form onSubmit={handleSignup} className="FormFields">
      <div className="FormField">
        <label className="FormField__Label" htmlFor="name">Full Name</label>
        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={userData.name} onChange={handleInputChange} />
      </div>
      <div className="FormField">
        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={userData.email} onChange={handleInputChange} />
      </div>
      <div className="FormField">
        <label className="FormField__Label" htmlFor="password">Password</label>
        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={userData.password} onChange={handleInputChange} />
      </div>

      {/* <div className="FormField">
        <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
        </label>
      </div> */}

      <div className="FormField">
          <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
      </div>
    </form>
  </div>
  )
}


// class SignUpForm extends Component {
//   state = {
//     email: "",
//     password: "",
//     name: "",
//     hasAgreed: false
//   };

          {/* <div className="FormField">
            <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
          </div> */}

//   handleSubmit = event => {
//     event.preventDefault();
//     // auth
//     //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
//     //   .then(user => {
//     //     // make call to the server sending in that unique id from firebase
//     //     this.setState({
//     //       hasAgreed: true
//     //     });
//     //   })
//     //   .catch(error => console.log(error));
//   };


//   render() {
//     return (
//       <div className="FormCenter">
//         <form onSubmit={handleSignup} className="FormFields">
//           <div className="FormField">
//             <label className="FormField__Label" htmlFor="name">Full Name</label>
//             <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={handleInputChange} />
//           </div>
//           <div className="FormField">
//             <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//             <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={handleInputChange} />
//           </div>
//           <div className="FormField">
//             <label className="FormField__Label" htmlFor="password">Password</label>
//             <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={handleInputChange} />
//           </div>

//           <div className="FormField">
//             <label className="FormField__CheckboxLabel">
//                 <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={handleInputChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
//             </label>
//           </div>

//           <div className="FormField">
//               <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SignUpForm;
