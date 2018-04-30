import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import UserNavigation from './headers/UserNavigation';
import { getSymptoms } from '../actions/symptomsActions';
import { diagnose } from '../actions/diagnosisActions';

class DiagnosisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      diagnosis: '',
      symptoms: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
    this.setState({ error: '', diagnosis: '' });

    if (!this.state.symptoms.length > 0) {
      this.setState({ error: 'Please select at least one symptoms! '})
    } else {
      this.props.diagnose(this.state.symptoms.toString())
    }
  }

  /**
   * Handles onCheck event
   * @method onCheck
   * @param {object} event
   * @return {void}
   */
  onChange(event) {
    if (event.target.checked && !this.state.symptoms.includes(event.target.id)) {
      // add to the array
      this.state.symptoms.push(event.target.id);
    } else if (!event.target.checked && this.state.symptoms.includes(event.target.id)) {
      // remove from the array
      let itemIndex = this.state.symptoms.indexOf(event.target.id);
      if(itemIndex != -1) {
        this.state.symptoms.splice(itemIndex, 1);
      }
    }
  }
  


  render() {
    const { symptoms } = this.props.symptoms;
    const { diagnosis } = this.props.diagnosis;

    if (!symptoms) {
      return <h4>Loading....</h4>;
    }

    const sicknessSymptoms = symptoms.map(symptomObj => {
       return (
        <span key={symptomObj.id}><input onChange={this.onChange} type="checkbox" id={symptomObj.id} /> <b> {symptomObj.symptoms} </b> <br /></span>
       )
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
                  <div className="col-8 mt-3">
                      <div className="row ml-1 text-dark"><b>SYMPTOMS</b> <span className="ml-5 text-danger">{this.state.error}</span></div><hr/>
                      <div className="scroll mb-3"> {sicknessSymptoms} </div>
                      <form onSubmit={this.onSubmit}>
                        <button  type="submit" className="btn btn-custom btn-lg">Diagnose</button>
                      </form>
                  </div>
                  <div className="col-4 mt-3">
                    <div className="form-group">
                      <label htmlFor="diagnosis_result"><b>DIAGNOSIS RESULT</b></label>
                      <textarea onChange={this.onChange} value={diagnosis} className="form-control" id="diagnosis_result" rows="12" readOnly="readOnly"></textarea>
                    </div>
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
    symptoms: state.symptoms,
    diagnosis: state.diagnose
  }
}

const mapDispatchToProps = {
  getSymptoms,
  diagnose
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisPage);