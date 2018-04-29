import React, { Component } from 'react';
import PropTypes, { any } from 'prop-types';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import { logout, setCurrentUser } from '../../actions/signinActions';

class UserNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.Logout = this.Logout.bind(this);
  }

  /**
   * Handles onSubmit event
   * @method onSubmit
   * @param {object} event
   * @return {void}
   */
  Logout(event) {
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push('/');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { errors, isLoading } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-light change-color">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#"><span className="bold-white">Apehmed</span></a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> 
          </ul>
          <span className='mr-5 text-dark'><b>{ isAuthenticated && user.email }</b></span>
          <form onSubmit={this.Logout} className="form-inline my-2 my-lg-0">
            <button disabled={isLoading} className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
          </form>
        </div>
      </nav>
    );
  }
}

UserNavigation.contextTypes = {
  router: PropTypes.objectOf(any).isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.userLogin
  }
}

const mapDispatchToProps = {
  logout,
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation)