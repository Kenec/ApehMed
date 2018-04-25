import React, { Component } from 'react';
import { Router,Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import DiagnosisPage from '../components/DiagnosisPage';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/diagnose/dashboard" component={DiagnosisPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;