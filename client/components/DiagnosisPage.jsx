import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import UserNavigation from './headers/UserNavigation';

class DiagnosisPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handles onSubmit event
   * @method onSubmit
   * @param {object} event
   * @return {void}
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.history.push('/diagnose/result');
  }


  render() {
    return (
      <div>
        <UserNavigation />
        <div className="container-fluid body-display">
        <div className="container-fluid body-image-transparent"></div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <h4 className="app-head">
                Symptoms <hr/>
              </h4>
                <div className="row app-description">
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox1">Crabs</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox2">Itching</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox3">Red Spots</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox1">Blue Spots</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox2">Blood in the Urine</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox3">Red Spots</label>
                  </div>
                </div>
                <div className="row app-description">
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox1">Burning sensation during urination</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox2">Fever</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox3">yellow or green discharge from the penis</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox1">pain in the lower abdomen</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox2">pain in the testicles</label>
                  </div>
                  <div className="htmlForm-check htmlForm-check-inline">
                    <input className="htmlForm-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label className="htmlForm-check-label" htmlFor="inlineCheckbox3">Red inflamed eye</label>
                  </div>
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <form onSubmit={this.onSubmit}>
                <button  type="submit" className="btn btn-custom btn-lg">Diagnose</button>
              </form>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisPage);