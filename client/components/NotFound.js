import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import NavigationHeader from './headers/NavigationHeader';

class NotFound extends Component {
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
        <NavigationHeader />
        <div className="container-fluid body-display">
        <div className="container-fluid body-image-transparent"></div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
                <h4 className="app-head">
                  PAGE NOT FOUND <hr/>
                </h4>
                <div>
                  The Page you requested is not found
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


export default NotFound;