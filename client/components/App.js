import React, { Component } from 'react';
import { Router,Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import SignupPage from '../components/SignupPage';
import DiagnosisPage from '../components/DiagnosisPage';
import NotFound from '../components/NotFound';
import requireAuth from '../utils/requireAuth';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/diagnose/dashboard" component={requireAuth(DiagnosisPage)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;