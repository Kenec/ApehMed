import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import UserNavigation from './headers/UserNavigation';
import { getSymptoms } from '../actions/symptomsActions';
import { diagnose } from '../actions/diagnosisActions';
import { getSickness } from '../actions/sicknessActions';

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
      this.props.getSymptoms();
      this.props.getSickness();
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
    const { sickness } = this.props.sickness;
    
    if (!symptoms) {
      return <h4>Loading....</h4>;
    }

    const sicknessSymptoms = symptoms.map(symptomObj => {
       return (
        <span key={symptomObj.id}><input onChange={this.onChange} type="checkbox" id={symptomObj.id} /> <b> {symptomObj.symptoms} </b> <br /></span>
       )
    })
    
    let listDiagnosed; 
    if(diagnosis) {
      listDiagnosed = diagnosis.map(res => {
        if(res[1] > 0) {
          return (
            <span key={res[0]}><br />
            <b>{res[0]}</b>
            </span>
          )
        }
      })
    }

    let listSickness;
    if(sickness) {
      listSickness = sickness.map(eachSickness => {
        return (
          <tr key={eachSickness.id}>
            <td>{eachSickness.sickness}</td>
            <td><input type="radio" id={eachSickness.id} name={eachSickness.sickness} value="positive"/></td>
            <td><input type="radio" id={eachSickness.id} name={eachSickness.sickness} value="negative"/></td>
          </tr>
        )
      }) 
    }

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
                  <h4 className="transparent"> LAB result </h4></a>
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
                    <div className="col-12">
                      <span><b>Suspected sickness</b></span>
                      <div className="col-12 bg-white scroll mt-2">
                        <br/>
                        {listDiagnosed && 'Your symptoms suggest you might be infected with: '}
                        {listDiagnosed && listDiagnosed}
                        <br/>
                        {listDiagnosed && 'Go for a NAA Test'}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="col-12 mt-3 bg-white">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Sickness</th>
                          <th scope="col">+ve (Detected)</th>
                          <th scope="col">-ve (Not Detected)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listSickness && listSickness}
                      </tbody>
                    </table>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <button  type="submit" className="btn btn-custom btn-lg">Get Treatment</button>
                  </form>
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
    diagnosis: state.diagnose,
    sickness: state.sickness
  }
}

const mapDispatchToProps = {
  getSymptoms,
  getSickness,
  diagnose
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisPage);