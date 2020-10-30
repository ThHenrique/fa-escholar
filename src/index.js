import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AuthLayout from "layouts/Auth.js";
<<<<<<< HEAD
import Home from "views/pages/Home";
import Login from "views/pages/Login";
import Cadastro from "views/pages/Cadastro";

=======
>>>>>>> 274a3d25dbe7e49b2c0422268e8691a7838c05ce

ReactDOM.render(
  <BrowserRouter>
    <Switch>
<<<<<<< HEAD
      <Route path="/admin" render={props => <AdminLayout {...props} />} />      
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/home" render={props => <Home {...props} />} />
      <Route path="/cadastro" render={props => <Cadastro {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />

      <Redirect from="/" to="/admin/index" />
=======
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="*" to="/auth/home" />
>>>>>>> 274a3d25dbe7e49b2c0422268e8691a7838c05ce
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
