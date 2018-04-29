import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import UserNavigation from './headers/UserNavigation';
import { getSymptoms } from '../actions/symptomsActions';

class DiagnosisPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

   /**
   * Life cycle method to be called before a component mounts
   * @method componentWillMount
   * @return {void} void
   */
    componentWillMount() {
      this.props.getSymptoms()
    }

    componentDidMount() {
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
    const { symptoms } = this.props.symptoms;
    let sicknessSymptoms = '';

    if (!symptoms) {
      return <h4>Loading....</h4>;
    }

    sicknessSymptoms = symptoms.map((symptomObj) => {
      return (
        <div key={symptomObj.id} className="row mt-3">
          <input type="checkbox" className="form-check-input" id={symptomObj.id} />
          <b><label className="form-check-label" htmlFor="exampleCheck1">{symptomObj.symptoms}</label></b>
        </div>
      );
    })
    
    return (
      <div>
        <UserNavigation />
        <div className="container-fluid body-display">
        <div className="container-fluid body-image-transparent"></div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                  <h4 className="transparent"> Diagnosis </h4></a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                  <h4 className="transparent"> Treatment </h4></a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                <div className="row">
                  <div className="col-10 mt-3">
                    <form onSubmit={this.onSubmit}>
                    <div className="mb-5 ml-5">
                      {sicknessSymptoms && sicknessSymptoms}
                    </div>
                    <button  type="submit" className="btn btn-custom btn-lg">Diagnose</button>
                    </form>
                  </div>
                </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="col-12 mt-3">
                    <form onSubmit={this.onSubmit}>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your Lab diagnosed sickness" />
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary" type="button">Get Treatments</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    symptoms: state.symptoms
  }
}

const mapDispatchToProps = {
  getSymptoms
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisPage);