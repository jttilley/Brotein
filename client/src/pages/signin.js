import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext'; 



const SignInForm = () => {
  const {handleInputChange, handleLogin, userData} = useContext (UserContext); 

  return (
    <div className="FormCenter">
    <form onSubmit={handleLogin} className="FormFields">
    {/* <div className="FormField">
        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={userData.email} onChange={handleInputChange} />
      </div> */}
    <div className="FormField">
        <label className="FormField__Label" htmlFor="username">User Name</label>
        <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={userData.username} onChange={handleInputChange} />
      </div>

      <div className="FormField">
        <label className="FormField__Label" htmlFor="password">Password</label>
        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={userData.password} onChange={handleInputChange} />
      </div>

      <div className="FormField">
          <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
      </div>
    </form>
  </div>
  ) 
}

export default SignInForm;