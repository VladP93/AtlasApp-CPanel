import React from "react";
import Atlaspng from "../../assets/images/Atlas.png";
import LoginForm from "../forms/LoginForm";

export default function Login() {
  return (
    <React.Fragment>
      <div className="container-fluid row login-main-container bg-atlas">
        <div className="centered centered-logo">
          <img src={Atlaspng} alt="logo" />
        </div>

        <div className="col-lg-4 col-md-3 col-sm-2"></div>
        <div className="col-lg-4 col-md-6 col-sm-8 align-middle centered">
          <div className="card">
            <LoginForm />
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-2"></div>
      </div>
      <div className="clearfix"></div>
    </React.Fragment>
  );
}
