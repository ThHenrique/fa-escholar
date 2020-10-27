import React from "react";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Home from "views/pages/Home";
import AuthFooter from "components/Footers/AuthFooter.js";
import "assets/vendor/nucleo/css/nucleo.css";

class Index extends React.Component {
  render() {
    return (
      <>
        <AuthNavbar />
        <div className="main-content">

          <div style={{ height: '12vh' }} />
          <Home />
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Index;
