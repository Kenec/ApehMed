import React, { Component } from 'react';
import { Router,Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import DiagnosisPage from '../components/DiagnosisPage';
import DiagnosisResultPage from '../components/DiagnosisResultPage';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/diagnose/dashboard" component={DiagnosisPage} />
            <Route exact path="/diagnose/result" component={DiagnosisResultPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;