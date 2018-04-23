import React, { Component } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);
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
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" />
            <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          </form>
        </div>
        </nav>
        <div className="container-fluid body-display">
        <div className="container-fluid body-image-transparent"></div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <h2 className="app-head">
                ApehMed STD Expert System <hr/>
              </h2>
              <p className="app-description">
                A sexually transmitted disease (STD) is an infectious illness that is transmitted through unprotected sexual activity including vaginal, anal and oral sex, or skin-to-skin contact with an infected area. STDs can also be spread via skin-to-skin contact or through intravenous (IV) drug use, and can be passed to an unborn child during pregnancy or through breastfeeding. 
              </p>
              <p className="nice_p">STDs are caused by some 30 viruses, bacteria and parasites that survive and spread through sexual contact. </p>
              <p className="nice_p">This expert system contains knowledge base from various expert domains to enable it diagnose based on your supplied symtoms</p>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <button type="button" class="btn btn-custom btn-lg">Signup</button>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default LandingPage;