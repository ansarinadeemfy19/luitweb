import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import MainScreen from './Screens/MainScreen';
import SigninScreen from './Screens/SigninScreen';
import OTPScreen from './Screens/OTPScreen';








function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route path="/" component={MainScreen} exact={true} />
          <Route path="/signin" component={SigninScreen}  />
          <Route path="/verifyotp" component={OTPScreen} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
