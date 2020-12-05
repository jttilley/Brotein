import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AuthForm from './pages/auth';
import API from './utils/API';
import HomePage from './pages/home';
import HealthPage from './pages/health';
import NewMealPage from './pages/new-meal';
import NewWorkOutPage from './pages/new-workout';
import HistoryPage from './pages/history';
import UserContext from './utils/UserContext'

  const App = () => {
    const [userData, setUserData] = useState({
      email: '',
      fullname: '',
      username: '',
      password: '',
    });
    const [loggedIn, setLoggedin] = useState(false);
    const [user, setUser] = useState(null);
    const [failureMessage, setFailureMessage] = useState(null);

    useEffect(() => {
      isLoggedIn();
    }, []);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserData({ ...userData, [name]: value });
    };

    const handleLogin = (event) => {
      event.preventDefault();
      const data = {
        username: userData.username,
        password: userData.password,
      };
      if (userData.username && userData.password) {
        API.login(data)
          .then((user) => {
            if (user.data.loggedIn) {
              setLoggedin(true);
              setUser(user.data.user);

              console.log('log in successful');
              window.location.href = '/profile';
            } else {
              console.log('Something went wrong :(');
              alert('Login failed, Please try again.');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    const handleSignup = (event) => {
      event.preventDefault();
      try {
        const data = {
          email: userData.email,
          fullname: userData.firstname,
          username: userData.username,
          password: userData.password,
        };

        if (userData.username && userData.password) {
          API.signup(data)
            .then((user) => {
              if (user.data === 'email is already in use') {
                alert('Email already in use.');
              }
              if (user.data.loggedIn) {
                if (user.data.loggedIn) {
                  setLoggedin(true);
                  setUser(user.data.user);
                  console.log('log in successful');
                  window.location.href = '/profile';
                } else {
                  console.log('something went wrong :(');
                  console.log(user.data);
                  setFailureMessage(user.data);
                }
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log('App -> error', error);
      }
    };

    const isLoggedIn = () => {
      if (!loggedIn) {
        API.isLoggedIn().then((user) => {
          if (user.data.loggedIn) {
            setLoggedin(true);
            setUser(user.data.user);
          } else {
            console.log(user.data.message);
          }
        });
      }
    };

    const logout = () => {
      if (loggedIn) {
        API.logout().then(() => {
          console.log('logged out successfully');
          setLoggedin(false);
          setUser(null);
        });
      }
    };

    const contextValue = {
      userData,
      loggedIn,
      user,
      failureMessage,
      handleInputChange,
      handleLogin,
      handleSignup,
      logout,
    };

  return (
    <UserContext.Provider value={contextValue}>
      <Router>
        <Route exact path="/" component={AuthForm} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/health" component={HealthPage} />
        <Route exact path="/new-meal" component={NewMealPage} />
        <Route exact path="/new-workout" component={NewWorkOutPage} />
        <Route exact path="/history" component={HistoryPage} />
      </Router>
    </UserContext.Provider>
  );
};

export default App;













