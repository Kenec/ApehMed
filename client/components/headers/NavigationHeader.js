import React, { Component } from 'react';
import PropTypes, { any } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux'
import { signin } from '../../actions/signinActions';

class NavigationHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Handles onChange event
   * @method onChange
   * @param {object} event
   * @return {void}
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Handles onSubmit event
   * @method onSubmit
   * @param {object} event
   * @return {void}
   */
  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.signin(this.state)
      .then(
        () => {
          this.context.router.history.push('/diagnose/dashboard');
        },
        ({ response }) => this.setState({
          errors: response.data,
          isLoading: false
        })
      );
  }

  render() {
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
          <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
            <span className="mr-3 text-danger"> {errors.message && errors.message} </span>
            <input name="email" onChange={this.onChange} value={this.state.email} className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" required />
            <input name="password" onChange={this.onChange} value={this.state.password} className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" required/>
            <button disabled={isLoading} className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          </form>
        </div>
      </nav>
    );
  }
}
NavigationHeader.contextTypes = {
  router: PropTypes.objectOf(any).isRequired
};

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  signin
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader)