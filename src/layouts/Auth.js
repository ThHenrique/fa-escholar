import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

class Auth extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  componentDidUpdate(e) {
    if (e.history.pathname !== e.location.pathname) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainContent.scrollTop = 0;
    }
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }

      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="main-content" style={{ backgroundColor: '#fbfbfb' }} ref="mainContent" >
          {/* <div className="main-content" style={{ backgroundImage: `url(${background})`, backgroundSize: '100%' }} ref="mainContent"> */}
          <AuthNavbar fixed="top" />
          <div style={{ height: '12vh' }} />
          <Switch>{this.getRoutes(routes)}</Switch>
          <AuthFooter />
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Auth;
