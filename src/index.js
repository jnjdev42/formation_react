import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Screens/Home/Home';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import LandingPage from './LandingPage';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'



const Root = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <ProtectedRoute exact path='/home' component={Home} />
        <ProtectedRoute exact path='/landing' component={LandingPage} />
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
