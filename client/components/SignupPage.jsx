import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationHeader from './headers/NavigationHeader';

class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationHeader />
        <div className="container-fluid body-display">
        <div className="container-fluid body-image-transparent"></div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <h2 className="app-head">
                ApehMed STD Expert System <hr/>
              </h2>
              
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <form onSubmit={this.onSubmit}>
                <div className="row col-12">
                    <div className="form-group col-2">
                      <label htmlFor="title">Title</label>
                      <select className="form-control" id="title">
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss</option>
                      </select>
                    </div>
                    <div className="form-group col-5">
                      <label htmlFor="lastname">Last Name</label>
                      <input type="email" className="form-control" id="lastname" placeholder="Enter your last name" required/>
                    </div>
                    <div className="form-group col-5">
                      <label htmlFor="firstname">First Name</label>
                      <input type="email" className="form-control" id="firstname" placeholder="Enter your first name" required/>
                    </div>
                  </div>
                  <div className="row col-12">
                    <div className="form-group col-2">
                      <label htmlFor="gender">Gender</label>
                      <select className="form-control" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="form-group col-5">
                      <label htmlFor="dob">Date of Birth</label>
                      <input type="date" className="form-control" id="dob" placeholder="Select date of birth" required/>
                    </div>
                    <div className="form-group col-5">
                      <label htmlFor="email">Email address</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email address" required/>
                    </div>
                </div>

                <div className="row col-12">
                    <div className="form-group col-12">
                      <label htmlFor="phone">Phone</label>
                      <input type="phone" className="form-control" id="phone" placeholder="Enter your phone number" required/>
                    </div>
                </div>

                <div className="row col-12">
                    <div className="form-group col-6">
                      <label htmlFor="dob">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="email">Confirm Password</label>
                      <input type="email" className="form-control" id="repassword" placeholder="Confirm password" required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-custom btn-lg ">Signup</button>
              </form>
            </div>
          </div>
      </div>
      </div>
    );
  }
}


export default SignupPage;