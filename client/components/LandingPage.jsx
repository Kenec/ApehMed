import React, { Component } from 'react';
import NavigationHeader from './headers/NavigationHeader';

class LandingPage extends Component {
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
              <p className="app-description">
                A sexually transmitted disease (STD) is an infectious illness that is transmitted through unprotected sexual activity including vaginal, anal and oral sex, or skin-to-skin contact with an infected area. STDs can also be spread via skin-to-skin contact or through intravenous (IV) drug use, and can be passed to an unborn child during pregnancy or through breastfeeding. 
              </p>
              <p className="nice_p">STDs are caused by some 30 viruses, bacteria and parasites that survive and spread through sexual contact. </p>
              <p className="nice_p">This expert system contains knowledge base from various expert domains to enable it diagnose based on your supplied symtoms</p>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 ml-5">
              <button type="button" className="btn btn-custom btn-lg">Signup</button>
            </div>
          </div>
      </div>
      </div>
    );
  }
}


export default LandingPage;