import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'

class DiagnosisResultPage extends Component {
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
    this.props.history.push('/diagnose/dashboard');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-light change-color">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#"><span className="bold-white">Apehmed</span></a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> 
          </ul>
        </div>
        </nav>
        <div className="container-fluid body-display">
        <div className="container-fluid body-image-transparent"></div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <h4 className="app-head">
                Diagnosis Result <hr/>
              </h4>
              <div>
                The System has diagnosed your sickness based on the symptoms you supplied to be <b className="text-danger"> Chlamydia </b>
              </div>
              <div className="mt-3">
                <h3>Treatments <hr/></h3>
                <p>
                The health care practitioner may prescribe a single-dose antibiotic, such as azithromycin (Zithromax), taken as a pill. On the other hand, the doctor may choose an antibiotic, such as doxycycline (Atridox, Bio-Tab), to be taken as a pill twice a day for a week. Up to 95% of people will be cured after one course of antibiotics.

                </p>
              </div>
              </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <form onSubmit={this.onSubmit}>
                <button type="submit" className="btn btn-custom btn-lg">Go Back</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisResultPage);